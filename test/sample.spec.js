describe('add todo', function () {
    let page;

    before (async function () {
      page = await browser.newPage();
      await page.goto('http://127.0.0.1:7001');
    });
  
    after (async function () {
      await page.close();
    });

    it('should have correct title', async function() {
        expect(await page.title()).to.eql('Puppeteer Demo');
    })
    it('should new todo correct', async function() {
      //点击输入框
      await page.click('#new-todo', {delay: 500});
      //输入内容
      await page.type('#new-todo', 'new todo item', {delay: 50});
      //点击enter
      await page.keyboard.press("Enter");
      let todoList = await page.waitFor('#todo-list');
      const expectInputContent = await page.evaluate(todoList => todoList.lastChild.querySelector('label').textContent, todoList);
      expect(expectInputContent).to.eql('new todo item');
    }) 

  });

  describe('del todo', function () {
    let page;

    before (async function () {
      page = await browser.newPage();
      await page.goto('http://127.0.0.1:7001');
    });
  
    after (async function () {
      await page.close();
    });

    it('should have correct title', async function() {
        expect(await page.title()).to.eql('Puppeteer Demo');
    })
    it('should del todo correct', async function() {
      await page.click('#todo-list', {delay: 500});
      await page.type('#todo-list', 'todo list item', {delay: 50});
      await page.keyboard.press("Enter");
      let todoList = await page.waitFor('#filters');
      const expectInputContent = await page.evaluate(todoList => todoList.lastChild.querySelector('label').textContent, todoList);
      expect(expectInputContent).to.eql('todo list item');
    }) 

  });

  describe('all todo', function () {
    let page;

    before (async function () {
      page = await browser.newPage();
      await page.goto('http://127.0.0.1:7001');
    });
  
    after (async function () {
      await page.close();
    });

    it('should have correct title', async function() {
        expect(await page.title()).to.eql('Puppeteer Demo');
    })
    it('should all todo correct', async function() {
      await page.click('#toggle-all', {delay: 500});
      await page.type('#toggle-all', 'todo list item', {delay: 50});
      await page.keyboard.press("Enter");
      let todoList = await page.waitFor('#todo-list');
      const expectInputContent = await page.evaluate(todoList => todoList.lastChild.querySelector('label').textContent, todoList);
      expect(expectInputContent).to.eql('all list item');
    }) 

  });
