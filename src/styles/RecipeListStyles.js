import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Main container - wraps the entire screen
  container: {
    flex: 1,
    backgroundColor: '#F8F4F0',
  },
  // Subtitle showing recipe count
  subtitle: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
    paddingVertical: 8,
    fontStyle: 'italic',
  },
  // Centered container for the ActivityIndicator
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Text below the spinner
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#FF6B35',
    fontStyle: 'italic',
  },
  // Padding for the FlatList content
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  // Each recipe card - borderLeftColor comes dynamically from item.color
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  // Left section of the card containing the emoji
  cardLeft: {
    marginRight: 14,
  },
  // Recipe emoji
  emoji: {
    fontSize: 36,
  },
  // Middle section with name, badge and meta info
  cardContent: {
    flex: 1,
  },
  // Recipe name
  recipeName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  // Category pill badge - backgroundColor comes from item.color
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    marginBottom: 6,
  },
  // Text inside the category badge
  categoryText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // Row with time and difficulty
  metaRow: {
    flexDirection: 'row',
    gap: 12,
  },
  // Each meta item (time, difficulty)
  metaText: {
    fontSize: 12,
    color: '#777',
  },
  // Right arrow indicator
  arrowIcon: {
    fontSize: 28,
    color: '#ccc',
    marginLeft: 8,
  },
});

export default styles;