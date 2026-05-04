class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let a = {};
      
        if (s.length != t.length) return false;
        for (let i = 0 ; i < s.length ; i++){
           a[s[i]] = (a[s[i]] || 0) + 1;
           a[t[i]] = (a[t[i]] || 0) - 1;
        }
        let result = true
        for (let key in a){
            if(a[key] != 0 )  result = false;
        };
        return result;

    }
}
