
// Service disabled for production
export const generateContentSuggestion = async (
  _fieldType: string,
  _currentValue: string,
  _context: string = ""
): Promise<string> => {
  return "AI features are disabled.";
};
