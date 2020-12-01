#　うごかしてみよう！
```ghost
basic.pause(100)
どうさ.まえすすめ()
どうさ.うしろすすめ()
どうさ.みぎカニあるき()
どうさ.ひだりカニあるき()
どうさ.とまれ()
どうさ.みぎまわれ()
どうさ.ひだりまわれ()
basic.forever(function () {
    どうさ.まえすすめ()
    while (どうさ.センサーまえ()) {
        どうさ.うしろすすめ()
    }
})  
basic.clearScreen()
input.onButtonPressed(Button.A, function () {
})
```
```template
input.onButtonPressed(Button.A, function () {
})
```


## Step 1

まずはじめにまっすぐ進ませてみよう！！
『ブロック』から「まえすすめ」のブロックを取り出してみよう！

## Step 2

2つのブロックがぴったりとはまるように組み合わせてみよう！

```blocks
input.onButtonPressed(Button.A, function () {
    どうさ.まえすすめ()
})
```

## Step 3

micro:bitに動きを送信してみよう！
どんな動きをするかな？？

