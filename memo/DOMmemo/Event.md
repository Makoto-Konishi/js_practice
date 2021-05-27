# イベントの追加

- ①と②は上書きされるので好ましくない

## ① HTMLタグにonclickと設定する

```html
<body>
  <div id="test"></div>
  <button id="target" onclick="change_color()">押してね</button>

  <script>
    function change_color(){
      const test = document.getElementById('test');
      test.textContent = 'テスト';
      test.classList.add('red');
    }
  </script>
</body>

```

## ② JSで設定 Element.onclick
```html
<body>
  <div id="test"></div>
  <button id="target">押してね</button> 

  <script>
    document.getElementById('target').onclick = function(){
      const test = document.getElementById('test');
      test.textContent = 'テスト';
      test.classList.add('red');
    }
  </script>
</body>
```

## ③ イベントリスナー EventTarget.addEventLister()
- コールバック関数(アロー関数)をつけてたくさん処理をつけられるので推奨
```html
<body>
  <div id="test"></div>
  <button id="target">押してね</button> 
  
  <script>
    const target = document.getElementById('target');

    target.addEventListener('click', ()=> {
      const test = document.getElementById('test');
      test.textContent = 'テスト';
      test.classList.add('red');
    });
  </script>
</body>
```
