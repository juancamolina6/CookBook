import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Main screen container
  container: {
    flex: 1,
    backgroundColor: '#F8F4F0',
  },
  // Hero card at the top - backgroundColor comes from recipe.color
  heroCard: {
    padding: 28,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  // Large emoji at the top of the hero
  heroEmoji: {
    fontSize: 64,
    marginBottom: 8,
  },
  // Recipe name in the hero section
  heroName: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 14,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  // Row of meta badges (category, time, difficulty)
  heroMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  // Each semi-transparent badge in the hero
  metaBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  metaBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  // Row containing favorite button and star rating
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 2,
  },
  favoriteButton: {
    alignItems: 'center',
  },
  favoriteIcon: {
    fontSize: 28,
  },
  favoriteLabel: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  ratingLabel: {
    fontSize: 12,
    color: '#777',
    marginBottom: 4,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 4,
  },
  starIcon: {
    fontSize: 22,
  },
  // Reusable white card section (portions, ingredients, steps)
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 14,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
    marginBottom: 14,
  },
  // Portion counter row
  portionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  // Circle buttons for +/-
  portionButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  portionButtonText: {
    fontSize: 22,
    fontWeight: '700',
  },
  portionCount: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    minWidth: 40,
    textAlign: 'center',
  },
  // Each ingredient row with colored bullet
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  // Small colored circle bullet - backgroundColor from recipe.color
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  ingredientText: {
    fontSize: 15,
    color: '#444',
    flex: 1,
  },
  // Each preparation step row
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  // Numbered circle - backgroundColor from recipe.color
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
  stepText: {
    fontSize: 15,
    color: '#444',
    flex: 1,
    lineHeight: 22,
  },
  // Go back button at the bottom
  backButton: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 30,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default styles;