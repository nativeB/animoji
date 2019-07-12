class Animoji {
  constructor (ele) {
    this.ele = ele
  }

  show (emoji) {
    const eleId = this.makeId(6)
    switch (emoji) {
      case 'like':
        this.append(this.ele, `

 <div class="emoji-container" id="${eleId}" >
  <div class="emojiWrapper" >
  <div class="emoji  emoji--like">
  <div class="emoji__hand">
      <div class="emoji__thumb">
        
    </div>
  </div>
</div>
  </div>
</div>
`, eleId)
        break
      case 'love':
        this.append(this.ele, `

 <div class="emoji-container" id="${eleId}">
<div class="emojiWrapper" >
 <div class="emoji  emoji--love">
  <div class="emoji__heart"></div>
</div>
  </div>  
</div>
`, eleId)
        break
      case 'haha':
        this.append(this.ele, `

 <div class="emoji-container" id="${eleId}">
<div class="emojiWrapper" >
<div class="emoji  emoji--haha">
  <div class="emoji__face">
    <div class="emoji__eyes"></div>
    <div class="emoji__mouth">
      <div class="emoji__tongue"></div>
    </div>
  </div>  
</div>
  </div>  
</div>
`, eleId)
        break
      case 'yay':
        this.append(this.ele, `

 <div class="emoji-container" id="${eleId}" >
 <div class="emojiWrapper"  >
<div class="emoji  emoji--yay">
  <div class="emoji__face">
    <div class="emoji__eyebrows"></div>
    <div class="emoji__mouth"></div>
  </div>
</div>
  </div>  
</div>
`, eleId)
        break
      case 'wow':
        this.append(this.ele, `

 <div class="emoji-container" id="${eleId}" >
  <div class="emojiWrapper"  >
<div class="emoji  emoji--wow">
  <div class="emoji__face">
    <div class="emoji__eyebrows"></div>
    <div class="emoji__eyes"></div>
    <div class="emoji__mouth"></div>
  </div>
</div>
  </div>  
</div>
`, eleId)
        break
      case 'sad':
        this.append(this.ele, `

 <div class="emoji-container" id="${eleId}" >
<div class="emojiWrapper"  >
  <div class="emoji  emoji--sad">
  <div class="emoji__face">
    <div class="emoji__eyebrows"></div>
    <div class="emoji__eyes"></div>
    <div class="emoji__mouth"></div>
  </div>
</div>
</div>
`, eleId)
        break
      case 'angry':
        this.append(this.ele, `

 <div class="emoji-container" id="${eleId}">
<div class="emojiWrapper"  >
  <div class="emoji  emoji--angry">
  <div class="emoji__face">
    <div class="emoji__eyebrows"></div>
    <div class="emoji__eyes"></div>
    <div class="emoji__mouth"></div>
  </div>
</div>
</div>
  </div>  
`, eleId)
        break
    }
  }

  append (ele, emo, emoId) {
    document.querySelector(ele).insertAdjacentHTML('afterBegin', emo)
    document.querySelector('#' + emoId).addEventListener('animationend', this.animationEndCallback)
  }

  makeId (length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  animationEndCallback (e) {
    e.target.remove()
    console.log(e.target.id)
  }
}

window.Animoji = Animoji
// test
//  let arr = ['wow','like','haha','angry','sad','yay','love']
// let ani =new Animoji('.eleToRunIn')
// //setTimeout(Emoji,10000)

//  function Emoji(){
//     ani.show(arr[Math.floor(Math.random() * 7)] )
//    setTimeout(Emoji,1000)
//  }

// Emoji()
