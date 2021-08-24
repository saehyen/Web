// async & await
// clear style of using promise :)

// 1. async : async 안에 있는 곳을 promise로 만들어줌.
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';
  }
  
  const user = fetchUser();
  user.then(console.log);
  console.log(user);
  
  // 2. await ✨
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);
    return '🍎';
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);
  
  // 3. useful APIs ✨
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  // All : 전체  race : 먼저 값을 리턴하는 값만 전달 
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  
  pickOnlyOne().then(console.log);