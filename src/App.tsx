import logoImage from './assets/6a2d51b84885993709f2747305008db225b74fdc.png';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { TradingCard } from './components/TradingCard';
import { CardBack } from './components/CardBack';
import { Sparkles, RotateCcw } from 'lucide-react';

// Database of garments - add more as you create them
const GARMENTS_DB: Record<string, any> = {
  'EW001': {
    garmentNumber: 1,
    totalSupply: 1,
    brandName: 'VENEZUELAN EXPRESS',
    garmentName: 'VENEZUELAN-EXPRESS-PROTOTIPO1',
    releaseDate: 'Nov 2025',
    rarity: 'Legendary' as const,
    imageUrl: 'https://res.cloudinary.com/dlfynz7vb/video/upload/v1762529678/venezuelan_express_spinner_pptzte.mp4',
    editionText: '#EW001',
    supplyText: '1 OF 1',
    rarityLevel: 'SUPER RARE',
  },
  'EW002': {
    garmentNumber: 2,
    totalSupply: 100,
    brandName: 'VENEZUELAN EXPRESS',
    garmentName: 'Limited Edition Tee V2',
    releaseDate: 'Dec 2025',
    rarity: 'Rare' as const,
    imageUrl: 'https://res.cloudinary.com/dlfynz7vb/video/upload/v1762529678/venezuelan_express_spinner_pptzte.mp4',
    editionText: '#EW002',
    supplyText: '2 OF 100',
    rarityLevel: 'RARE',
  },
  // Add more garments here as you create them
};

export default function App() {
  // Get garment data from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const garmentId = urlParams.get('id') || urlParams.get('garment') || 'EW001';
  const garmentData = GARMENTS_DB[garmentId] || GARMENTS_DB['EW001'];

  const [activeTab, setActiveTab] = useState('card');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-8 max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <img
              src={logoImage}
              alt="Venezuelan Express"
              className="w-full max-w-[280px] sm:max-w-[320px] h-auto"
            />
          </div>

          <p className="text-gray-300 px-4 text-sm sm:text-base font-[Aldrich]">
            This is your NFC verified digital trading card.

          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-900/50 backdrop-blur-sm border border-purple-800">
            <TabsTrigger
              value="card"
              className="text-gray-300 text-sm sm:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white"
            >
              <Sparkles className="w-4 h-4 mr-1.5 sm:mr-2" />
              Front
            </TabsTrigger>
            <TabsTrigger
              value="back"
              className="text-gray-300 text-sm sm:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white"
            >
              <RotateCcw className="w-4 h-4 mr-1.5 sm:mr-2" />
              Back
            </TabsTrigger>
          </TabsList>

          <div className="perspective-1000 relative min-h-[750px] mb-12">
            <TabsContent value="card" className="mt-0 absolute inset-0" style={{ pointerEvents: activeTab === 'card' ? 'auto' : 'none' }}>
              <TradingCard {...garmentData} isActive={activeTab === 'card'} />

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeTab === 'card' ? 1 : 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-purple-800"
              >
                <h3 className="text-white mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  About This Piece
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  This is a limited edition wearable art piece authenticated via NFC technology.
                  Each garment in this collection is unique and comes with its own digital trading card
                  and immersive AR experience.
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="back" className="mt-0 absolute inset-0" style={{ pointerEvents: activeTab === 'back' ? 'auto' : 'none' }}>
              {activeTab === 'back' && (
                <CardBack
                  brandName={garmentData.brandName}
                  garmentNumber={garmentData.garmentNumber}
                  isActive={activeTab === 'back'}
                />
              )}
            </TabsContent>
          </div>
        </Tabs>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-20 text-center mt-12 mb-8 text-gray-500 text-xs sm:text-sm px-4"
        >
          <p className="pt-36">Authenticated via NFC · Edition {garmentData.editionText || `#${garmentData.garmentNumber}`}</p>
          <p className="mt-2">Venezuelan Express NFC Art Collection 2025</p>
        </motion.div>
      </div>
    </div>
  );
}