function sortByLength(strs) {
  return strs.sort((str1,str2) => str1.length - str2.length);
}



/**
* Test Suite 
*/
describe('sortByLength()', () => {
  it('sorts the strings from shortest to longest', () => {
      // arrange
      const strs = ["abc", "", "aaa", "a", "zz"];
      
      // act
      const result = sortByLength(strs);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
  });
});