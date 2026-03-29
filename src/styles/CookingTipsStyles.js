import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Main screen container with space-between to push button to bottom
  container: {
    flex: 1,
    backgroundColor: '#F8F4F0',
    padding: 20,
    justifyContent: 'space-between',
  },
  // Top section: "Tip X de 10" text + dot indicators
  progressContainer: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  // "Tip X de 10" text
  progressText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B35',
    marginBottom: 10,
    letterSpacing: 1,
  },
  // Row of dot indicators
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  // Default inactive dot
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDD',
  },
  // Active dot - wider to highlight current tip
  dotActive: {
    backgroundColor: '#FF6B35',
    width: 22,
    borderRadius: 4,
  },
  // Main tip card - Animated.View for fade effect
  tipCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#F0E8E0',
  },
  // Large emoji at top of card
  tipEmoji: {
    fontSize: 72,
    marginBottom: 16,
  },
  // Category tag pill
  categoryTag: {
    backgroundColor: '#FFF0EA',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 14,
  },
  categoryTagText: {
    color: '#FF6B35',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  // Tip title
  tipTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#222',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 28,
  },
  // Tip body text
  tipText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 26,
  },
  // Auto-rotation info label
  autoRotateInfo: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  autoRotateText: {
    fontSize: 12,
    color: '#AAA',
    fontStyle: 'italic',
  },
  // Manual next button at the bottom
  nextButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default styles;