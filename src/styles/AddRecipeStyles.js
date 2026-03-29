import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Main screen container
  container: {
    flex: 1,
    backgroundColor: '#F8F4F0',
  },
  // ScrollView inner padding
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  // Form section title
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 20,
    textAlign: 'center',
  },
  // Wrapper for each label + input pair
  fieldGroup: {
    marginBottom: 20,
  },
  // Field label above each input
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // Standard text input style
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 15,
    color: '#222',
    borderWidth: 1.5,
    borderColor: '#E8E0D8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  // Extra height for the ingredients multiline input
  textArea: {
    height: 110,
    paddingTop: 13,
  },
  // Row of selectable chip options
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  // Default unselected chip
  optionChip: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#E0D8D0',
    backgroundColor: '#fff',
  },
  // Selected chip - orange fill
  optionChipSelected: {
    backgroundColor: '#FF6B35',
    borderColor: '#FF6B35',
  },
  // Default chip text color
  optionChipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  // Selected chip text color
  optionChipTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  // Hint shown when form fields are incomplete
  validationHint: {
    textAlign: 'center',
    color: '#FF9800',
    fontSize: 13,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  // Row containing clear and save buttons
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  // Clear button - outlined style
  clearButton: {
    flex: 1,
    padding: 16,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#FF6B35',
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#FF6B35',
    fontSize: 15,
    fontWeight: '700',
  },
  // Save button - filled style
  saveButton: {
    flex: 2,
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    shadowColor: '#FF6B35',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  // Save button when form is invalid - greyed out
  saveButtonDisabled: {
    backgroundColor: '#CCBCB0',
    shadowOpacity: 0,
    elevation: 0,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;