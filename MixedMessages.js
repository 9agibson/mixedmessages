let messageOne = ['You will','I know you can','Keep Going and you will']
let messageTwo = ['kill it', 'do great']
let messageThree = ['friend', 'muchacho', 'buddy']

const randomMessage = () => {
    
    const partOne = () => {
        let randNum = Math.floor(Math.random() * messageOne.length)
        let one = messageOne[randNum]
        return one
    }
    const partTwo = () => {
        let randNum = Math.floor(Math.random() * messageTwo.length)
        let two = messageTwo[randNum]
        return two
    }
    const partThree = () => {
        let randNum = Math.floor(Math.random() * messageThree.length)
        let three = messageThree[randNum]
        return three 
    }
    console.log(`${partOne()} ${partTwo()} ${partThree()}`)
}    

randomMessage()