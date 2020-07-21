import Heap from 'heap-js';

const insertText = (map, text) => {
  const lines = text.split('\n');

  for (const line of lines) {
    const words = line.split(' ');
    insertWords(map, words);
  }
};

const insertWords = (map, words) => {
  for (const word of words) {
    // remove punctuation
    const trimmedWord =
      word[word.length - 1] === ',' || word[word.length - 1] === '.'
        ? word.slice(0, word.length - 1)
        : word;

    if (!map.has(trimmedWord)) {
      map.set(trimmedWord, 0);
    }

    const oldVal = map.get(trimmedWord);
    map.set(trimmedWord, oldVal + 1);
  }
};

const countWords = (pages) => {
  let freqMap = new Map();

  for (const page of Object.values(pages)) {
    insertText(freqMap, page);
  }

  return freqMap;
};

const comparatorFromMap = (freqMap) => (word1, word2) => {
  const freq1 = freqMap.get(word1);
  const freq2 = freqMap.get(word2);

  if (freq1 === freq2) {
    return word1 > word2 ? 1 : -1;
  }
  return freq1 < freq2 ? -1 : 1;
};

const makeHeap = (freqMap, k) => {
  const wordComparator = comparatorFromMap(freqMap);

  // construct heap using custom comparator
  let wordHeap = new Heap(wordComparator);
  for (const word of freqMap.keys()) {
    wordHeap.push(word);

    if (wordHeap.length > k) {
      // remove least frequent word from heap
      wordHeap.pop();
    }
  }

  return wordHeap;
};

export const topKWords = (pages, k = 5) => {
  const freqMap = countWords(pages);
  let wordHeap = makeHeap(freqMap, k);

  let result = [];
  for (let i = 0, size = wordHeap.length; i < size; i++) {
    result.push(wordHeap.pop());
  }

  return result.reverse();
};
