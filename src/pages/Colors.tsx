import { useState } from 'react'
import { Check, Copy, Plus, Trash2 } from 'lucide-react'

type ColorStop = { id: number; color: string; position: string }
type GradientType = 'linear' | 'radial'

function Colors() {
  const [gradientType, setGradientType] = useState<GradientType>('linear')
  const [angle, setAngle] = useState(135)
  const [stops, setStops] = useState<ColorStop[]>([
    { id: 1, color: '#53583c', position: '' },
    { id: 2, color: '#c4c7b2', position: '' },
  ])
  const [activeTab, setActiveTab] = useState<'visual' | 'ast'>('visual')
  const [toast, setToast] = useState('')

  const stopList = stops.map(({ color, position }) => `${color}${position ? ` ${position}%` : ''}`).join(', ')
  const gradient = gradientType === 'linear'
    ? `linear-gradient(${angle}deg, ${stopList})`
    : `radial-gradient(circle, ${stopList})`
  const cssOutput = `background-image: ${gradient};`
  const ast = JSON.stringify({
    type: `${gradientType}-gradient`,
    orientation: gradientType === 'linear' ? { type: 'angular', value: `${angle}deg` } : undefined,
    colorStops: stops.map(({ color, position }) => ({
      type: 'color',
      value: color,
      position: position === '' ? undefined : { value: Number(position), unit: '%' },
    })),
  }, null, 2)

  const updateStop = (id: number, patch: Partial<ColorStop>) => {
    setStops((current) => current.map((stop) => stop.id === id ? { ...stop, ...patch } : stop))
  }

  const copyText = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setToast(`${label} copied`)
    } catch {
      setToast('Clipboard access unavailable')
    }
    window.setTimeout(() => setToast(''), 2200)
  }

  return (
    <main className="min-h-screen bg-[#f7f7f5] px-4 py-8 text-[#212121] sm:px-6 lg:py-12">
      <section className="mx-auto w-full max-w-5xl border border-stone-200 bg-white">
        <header className="flex flex-col justify-between gap-4 border-b border-stone-200 bg-[#fbfbfa] px-5 py-5 sm:flex-row sm:items-center sm:px-7">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[#56593B]">Serenia tools</p>
            <h1 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl">Gradient studio</h1>
            <p className="mt-1 text-sm text-gray-500">Build and inspect CSS gradients.</p>
          </div>
          <div className="flex border border-stone-200 bg-stone-100 p-1 text-xs font-semibold" role="tablist" aria-label="Gradient tool view">
            <button type="button" role="tab" aria-selected={activeTab === 'visual'} onClick={() => setActiveTab('visual')} className={`px-4 py-2 ${activeTab === 'visual' ? 'bg-white text-[#56593B]' : 'text-gray-600 hover:text-gray-900'}`}>Visual editor</button>
            <button type="button" role="tab" aria-selected={activeTab === 'ast'} onClick={() => setActiveTab('ast')} className={`px-4 py-2 ${activeTab === 'ast' ? 'bg-white text-[#56593B]' : 'text-gray-600 hover:text-gray-900'}`}>AST inspector</button>
          </div>
        </header>

        <div className="space-y-6 p-5 sm:p-7">
          <section aria-label="Live gradient preview" className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Live preview</span><code className="border border-stone-200 bg-stone-50 px-2 py-1 text-[#56593B]">{gradientType}-gradient</code>
            </div>
            <div className="h-36 w-full border border-stone-200 sm:h-48" style={{ backgroundImage: gradient }} />
          </section>

          {activeTab === 'visual' ? (
            <div className="space-y-6">
              <section className="grid grid-cols-1 gap-5 border border-stone-200 bg-stone-50/70 p-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['linear', 'radial'] as const).map((type) => <button key={type} type="button" onClick={() => setGradientType(type)} aria-pressed={gradientType === type} className={`border px-3 py-2 text-sm capitalize transition-colors ${gradientType === type ? 'border-[#56593B]/50 bg-[#f2f3ed] text-[#434930]' : 'border-stone-200 bg-white text-gray-700 hover:bg-stone-100'}`}>{type}</button>)}
                  </div>
                </div>
                {gradientType === 'linear' && (
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-600"><label htmlFor="gradient-angle">Angle</label><span className="text-[#56593B]">{angle}°</span></div>
                    <input id="gradient-angle" type="range" min="0" max="360" value={angle} onChange={(event) => setAngle(Number(event.target.value))} className="w-full accent-[#56593B]" />
                  </div>
                )}
              </section>

              <section className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold text-gray-800">Color stops <span className="text-gray-500">({stops.length})</span></h2>
                  <button type="button" disabled={stops.length >= 8} onClick={() => setStops((current) => [...current, { id: Math.max(...current.map((stop) => stop.id)) + 1, color: '#7d8261', position: '' }])} className="inline-flex items-center gap-1 border border-[#56593B]/20 bg-[#f5f6ef] px-3 py-2 text-xs font-medium text-[#56593B] hover:bg-[#eceee3] disabled:opacity-40"><Plus className="h-3.5 w-3.5" />Add stop</button>
                </div>
                <div className="max-h-64 space-y-2 overflow-y-auto">
                  {stops.map((stop, index) => (
                    <div key={stop.id} className="grid grid-cols-[44px_minmax(0,1fr)_88px_36px] items-center gap-2 border border-stone-200 bg-stone-50 p-2">
                      <label className="relative grid h-8 w-8 cursor-pointer place-items-center border border-stone-300" style={{ backgroundColor: stop.color }} title={`Choose color for stop ${index + 1}`}>
                        <input type="color" value={/^#[0-9a-f]{6}$/i.test(stop.color) ? stop.color : '#53583c'} onChange={(event) => updateStop(stop.id, { color: event.target.value })} aria-label={`Color stop ${index + 1}`} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                      </label>
                      <input type="text" value={stop.color} onChange={(event) => updateStop(stop.id, { color: event.target.value })} aria-label={`Color value for stop ${index + 1}`} className="min-w-0 border border-stone-200 bg-white px-2 py-2 font-mono text-xs text-gray-800 outline-none focus:border-[#56593B]" />
                      <div className="flex items-center border border-stone-200 bg-white pr-2"><input type="number" min="0" max="100" value={stop.position} onChange={(event) => updateStop(stop.id, { position: event.target.value })} aria-label={`Position for stop ${index + 1}`} placeholder="Auto" className="min-w-0 w-full px-2 py-2 text-xs outline-none focus:border-[#56593B]" /><span className="text-xs text-gray-400">%</span></div>
                      <button type="button" disabled={stops.length <= 2} onClick={() => setStops((current) => current.filter((entry) => entry.id !== stop.id))} aria-label={`Remove color stop ${index + 1}`} className="grid h-8 w-8 place-items-center text-gray-500 hover:bg-red-50 hover:text-red-700 disabled:opacity-30"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-2 border-t border-stone-200 pt-5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-600"><h2>Generated CSS</h2><button type="button" onClick={() => copyText(cssOutput, 'CSS')} className="inline-flex items-center gap-1 text-[#56593B] hover:text-[#434930]"><Copy className="h-3.5 w-3.5" />Copy CSS</button></div>
                <pre className="overflow-x-auto border border-stone-800 bg-[#22231f] p-4 text-xs leading-relaxed text-[#d3d8bf]"><code>{cssOutput}</code></pre>
              </section>
            </div>
          ) : (
            <section className="space-y-3" role="tabpanel">
              <div className="flex items-center justify-between gap-4">
                <div><h2 className="text-sm font-semibold text-gray-800">Gradient structure</h2><p className="mt-1 text-xs text-gray-500">Structured representation of the current editor state.</p></div>
                <button type="button" onClick={() => copyText(ast, 'JSON')} className="inline-flex shrink-0 items-center gap-1 border border-stone-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-stone-50"><Copy className="h-3.5 w-3.5" />Copy JSON</button>
              </div>
              <pre className="max-h-[50vh] overflow-auto border border-stone-800 bg-[#22231f] p-4 text-xs leading-relaxed text-[#d3d8bf]"><code>{ast}</code></pre>
            </section>
          )}
        </div>
      </section>

      {toast && <div role="status" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#242424] px-4 py-3 text-sm text-white shadow-lg"><Check aria-hidden="true" className="h-4 w-4 text-[#c4c7b2]" />{toast}</div>}
    </main>
  )
}

export default Colors