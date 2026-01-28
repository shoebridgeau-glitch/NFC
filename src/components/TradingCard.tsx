import { motion } from 'motion/react';
import { Sparkles, Award, Calendar, Hash } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

interface TradingCardProps {
  garmentNumber: number;
  totalSupply: number;
  brandName: string;
  garmentName: string;
  releaseDate: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  imageUrl: string;
  editionText?: string;
  supplyText?: string;
  rarityLevel?: string;
  isActive: boolean;
}

const rarityColors = {
  Common: 'from-gray-400 to-gray-600',
  Rare: 'from-purple-400 to-purple-600',
  Epic: 'from-purple-500 to-purple-700',
  Legendary: 'from-purple-400 to-purple-600',
};

const rarityBadgeColors = {
  Common: 'bg-gray-500',
  Rare: 'bg-purple-500',
  Epic: 'bg-purple-600',
  Legendary: 'bg-gradient-to-r from-purple-500 to-purple-600',
};

export function TradingCard({
  garmentNumber,
  totalSupply,
  brandName,
  garmentName,
  releaseDate,
  rarity,
  imageUrl,
  editionText,
  supplyText,
  rarityLevel,
  isActive,
}: TradingCardProps) {
  return (
    <motion.div
      animate={{ 
        rotateY: isActive ? 0 : 180,
        opacity: isActive ? 1 : 0
      }}
      initial={false}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ transformStyle: 'preserve-3d' }}
      className="perspective-1000"
    >
      <Card className="w-full mx-auto overflow-hidden relative"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Holographic Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-400/20 to-purple-600/20 opacity-50 pointer-events-none animate-pulse" />
        
        {/* Card Header with Rarity */}
        <div className={`bg-gradient-to-r ${rarityColors[rarity]} p-3 sm:p-4 relative`}>
          <div className="flex justify-between items-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Badge className={`${rarityBadgeColors[rarity]} text-white border-none text-xs sm:text-sm`}>
                <Sparkles className="w-3 h-3 mr-1" />
                {rarityLevel || 'SUPER RARE'}
              </Badge>
            </motion.div>
            <div className="text-white text-right">
              <div className="flex items-center gap-1 justify-end">
                <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="tracking-wider text-sm sm:text-base">{garmentNumber}</span>
              </div>
              <div className="text-xs opacity-90">of {totalSupply}</div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 p-4 sm:p-6 bg-[rgba(131,0,255,0.92)]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-purple-600/30 rounded-lg blur-xl" />
            <video
              src={imageUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-square object-cover rounded-lg shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Card Info */}
        <div className="bg-slate-950 text-white p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              {editionText || `#${garmentNumber}`}
            </div>
            <h3 className="text-lg sm:text-xl tracking-tight">{garmentName}</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-800">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-400">Edition</div>
                <div className="text-xs sm:text-sm">{supplyText || `${garmentNumber} OF ${totalSupply}`}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-500 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-400">Released</div>
                <div className="text-xs sm:text-sm">{releaseDate}</div>
              </div>
            </div>
          </div>

          {/* Authenticity Marker */}
          <div className="pt-3 sm:pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Authenticated via NFC</span>
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1 text-green-500"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Verified
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Holographic Strip */}
        <div className="h-1.5 sm:h-2 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600" />
      </Card>
    </motion.div>
  );
}