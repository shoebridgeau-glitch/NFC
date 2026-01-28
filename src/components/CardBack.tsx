import { motion } from 'motion/react';
import { Play, Image as ImageIcon, Share2, Info, ShieldCheck, Globe, Lock } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

interface CardBackProps {
  brandName: string;
  garmentNumber: number;
  isActive: boolean;
}

export function CardBack({ brandName, garmentNumber, isActive }: CardBackProps) {
  return (
    <motion.div
      animate={{ 
        rotateY: isActive ? 0 : -180,
        opacity: isActive ? 1 : 0
      }}
      initial={false}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ transformStyle: 'preserve-3d' }}
      className="perspective-1000"
    >
      <Card className="w-full mx-auto overflow-hidden relative bg-slate-950 border-purple-800"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-950 p-3 sm:p-4 border-b border-purple-800">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-purple-500/10 text-purple-300 border-purple-500/50">
                BACK
              </Badge>
              <span className="text-gray-400 text-xs tracking-widest uppercase">Details</span>
            </div>
            <div className="text-xs font-mono text-purple-400">
              #{garmentNumber.toString().padStart(3, '0')}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Image Placeholder Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-purple-300 font-medium">
              <ImageIcon className="w-4 h-4" />
              <span>Design Concept</span>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-purple-800 bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1552591663-19c67e9e2f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZGVzaWduJTIwc2tldGNoJTIwcHVycGxlJTIwZGFya3xlbnwxfHx8fDE3NjM0ODkyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Design Concept"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-2 left-2 text-xs text-gray-400">
                Original Sketch v1.0
              </div>
            </div>
          </div>

          {/* YouTube Embed Placeholder Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-purple-300 font-medium">
              <Play className="w-4 h-4" />
              <span>Campaign Video</span>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-purple-800 bg-black group cursor-pointer">
              {/* YouTube UI Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                 <div className="bg-black/60 rounded px-1 text-[10px] text-white">0:30</div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                 <p className="text-xs text-white font-medium truncate">Venezuelan Express - Season 1 Teaser</p>
              </div>
            </div>
          </div>

          {/* Secure Digital ID Features */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 text-sm text-purple-300 font-medium mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Secure Digital ID</span>
            </div>
            <Accordion type="single" collapsible className="w-full bg-slate-900/50 rounded-lg border border-purple-800/50 px-2">
              <AccordionItem value="item-1" className="border-purple-800/50">
                <AccordionTrigger className="text-purple-100 hover:text-purple-300 hover:no-underline py-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-left">
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>Anti-Counterfeit Authentication</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-xs space-y-2 pb-3">
                  <p><span className="text-purple-300 font-medium">Description:</span> Each tap generates a unique, encrypted signature (Cryptogram) verified instantly by our server. This ensures that the digital product passport and trading card are only accessible with a genuine, factory-programmed tag.</p>
                  <p><span className="text-purple-300 font-medium">Benefit:</span> Eliminates counterfeits and guarantees the item's authenticity to every owner, crucial for the secondary market.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-purple-800/50">
                <AccordionTrigger className="text-purple-100 hover:text-purple-300 hover:no-underline py-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-left">
                        <Globe className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>Dynamic Product Passport (DPP)</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-xs space-y-2 pb-3">
                  <p><span className="text-purple-300 font-medium">Description:</span> The tag links to a comprehensive digital hub containing the garment's full lifecycle story: ethical material sourcing, manufacturing details, and the unique pattern flatlay/design notes.</p>
                  <p><span className="text-purple-300 font-medium">Benefit:</span> Provides radical transparency, enhancing brand trust and connecting the customer to the product's creative and sustainable journey.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b-0">
                <AccordionTrigger className="text-purple-100 hover:text-purple-300 hover:no-underline py-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-left">
                        <Lock className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                        <span>Tap-Count Security</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-xs space-y-2 pb-3">
                  <p><span className="text-purple-300 font-medium">Description:</span> An internal, secure counter records every time the tag is tapped. The server checks this counter to immediately reject fraudulent access attempts (known as "replay attacks") using copied links.</p>
                  <p><span className="text-purple-300 font-medium">Benefit:</span> Guarantees that the secure link cannot be shared or duplicated, ensuring the digital content remains exclusive and secure for the legitimate product owner.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Additional Metadata */}
          <div className="pt-4 border-t border-purple-800/50 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Collection</span>
              <span className="text-gray-300">Genesis Drop 2025</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Asset ID</span>
              <span className="font-mono text-purple-400 text-[10px]">{brandName.substring(0,3).toUpperCase()}-{garmentNumber}-NFT</span>
            </div>
          </div>
          
        </div>

        {/* Bottom Action Bar (Visual Only) */}
        <div className="bg-slate-900/50 p-3 border-t border-purple-800 flex justify-between items-center">
            <button className="text-xs flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors">
                <Info className="w-3.5 h-3.5" />
                <span>Metadata</span>
            </button>
            <button className="text-xs flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors">
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
            </button>
        </div>

        {/* Holographic Strip */}
        <div className="h-1.5 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600" />
      </Card>
    </motion.div>
  );
}
