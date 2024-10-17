function isValidName(title) {
    if (typeof title !== 'string') return false;
  
    const words = title.trim().split(/\s+/);
    
    if (words.length < 2) return false;
  
    return words.every(word => word.length >= 3);
}
  
module.exports = { isValidName };