import { FormControl } from "@angular/forms"

export function restrictedWords(restrictedWordsArr:Array<any>) {
    return (control: FormControl): {[key:string]: any} => {
      if(!restrictedWordsArr) 
        return null
      
      // Arr
      let wordArr = restrictedWordsArr.filter(word => control.value.includes(word))
      return (wordArr.length > 0) ? {'restrictedwords': { 'list': wordArr.join(', ')}} : null
    }
  }