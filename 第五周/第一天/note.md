- 本地的项目提交到远程github上；
    1. 在本地新建一个文件夹，把他变成git可以管理的仓库: git init
    2. 在GitHub上创建了一个远程仓库
    3. 连接本地仓库和远程仓库 git remote add origin 
    4. git add . 把本地仓库的所有内容都推送到暂存区
    5. git commit -m"注释" 把所有暂存区的内容都推送到历史区
    6. git push origin master 把历史区的东西推送到GitHub地址上的master分枝上区；branch master
- 辅助的命令
    + 添加远程通道 git remote add xxxxx
    + 移除远程通道 git remote rm xxxx
    + 查看连接了哪些远程通道 git remote -v
- 
`Initialized empty Git repository in /Users/zhanglei/Desktop/课件/.git/`
    + Initialized 初始化
    + empty 空
    + Git repository ：git仓库
- .git/config的配置
    1. 用webstrom打开.git
    2. 找到config配置文件
    3. 连接了自己的远程仓库后，config文件夹下默认出现了url=https://username:password@github.com/用户名/项目名.git
- fork 别人的项目，同时克隆到自己的本地；
    + 把老师放到地址栏的地址，在自己的GitHub的地址栏打开
    + 到别人的GitHub上，点击fork，把别人的项目复制了一份到自己的项目中；
 老师的GitHub地址：https://github.com/yuanmengyuan/2017218javascript
 个人的GitHub地址：https://github.com/leilei1238/2017218javascript.git  
    + 复制自己项目的地址；
    + 把地址的内容克隆到自己本地；git clone 你自己的GitHub的地址；
    比如：个人的GitHub地址：https://github.com/leilei1238/2017218javascript.git  
        + 在你git clone的时候，默认就连接上了自己的远程通道origin
    + **注意注意！！**：当down下来的时候，默认的文件夹不对；如果我们以后想提交新内容，必须进入到2017218javascript这个文件夹下去；
- 本地更新别人远程的内容到自己的本地，需要三步，但是以后两步
    + 第一次的需要连接别人的远程通道；
    git remote add teacher (老师的远程地址)https://github.com/yuanmengyuan/2017218javascript
        + 检测：git remote -v
        一般情况下，此时有两个远程通道（自己的origin，老师teacher）；
    + 更新：git remote update teacher
    + 把更新的内容拉到本地：git pull teacher master;
- 提交作业（每个人为项目做贡献）
    + 先把作业内容准备好，注意两点：1）一定要有内容 2）编码格式utf-8;否则乱码
    + 往自己的远程通道推送-origin
    + 请求合并；
        + 点击new pull request
        + 点击绿色的：create pull request 
        
-------------------------------------------
### git小总结
- 原理：
    - 一个本地仓库（在你的电脑上）
        + 如何把本地的文件夹，变成一个git可以管理的仓库 git init
    - 一个自己的远程仓库 origin
    - 一个是别人的远程仓库 teacher
- git的命令：
    - 查看连接了哪些远程仓库：git remote -v
    - 添加远程仓库： git remote add  通道名 通道地址
    - 删除远程仓库： git remote rm 通道名
    - 更新远程仓库：git remote update 通道名
        + git pull 通道名 master
- 常用的git工作流：
    - git add . 
    - git commit -m"注释内容"
    - git push origin master
- 如何更新老师的课件：
    1. 把老师课件的地址，放到github的地址栏，回车；
    2. 回车后，跑到老师的github上了，点击fork，就把老师的项目复制了一份到自己的远程的github上了；
    3. git clone 自己远程的地址； 克隆了一份一模一样的到自己的本地；
    4. 当老师课件更新的时候，我想更新自己本地的代码：
        + 建立自己本地和老师远程的链接（只需要建立一次）
        git remote add teacher （老师github的地址）
        + 更新：git remote update xxx
        + 拉到本地:git pull xxx master
    5. 想为老师的项目做贡献：
        + 把自己本地的代码，推送到自己远程
        + 请求自己远程的代码合并，跟老师项目的合并；
-------------------------------------------------
### 1.1预解释
- 为何学习预解释：
    + 可以明白同一段代码，在不同的环境下，结果不一样
    + 带var和不带var是有区别的；（变量和window全局属性）
    + 变态面试题
- 预解释：在当前作用域下，在JS代码执行之前，浏览器会对带var和带function，进行提前声明或定义；
- 带var和带function的声明和定义不同：
    + 带var的，只声明，不定义
    + 带function，声明+定义
- 函数定义三步骤：
    1。 开辟一个空间地址
    2。 把函数体内所有JS代码作为字符串放在这个空间中
    3。 把空间地址赋值给函数名；
- 函数调用四步骤：
    1。 形成一个私有作用域
    2。 形参赋值
    3。 预解释
    4。 代码从上到下的执行；
- 什么叫上级作用域
    上级作用域跟函数在哪里调用无关，只跟函数对应的堆内存在哪里开辟有关；
- 作用域链：
  当函数被调用的时候，会形成一个私有作用域；在这个作用域中查找是否有私有变量a;
  如果有私有变量a：那么整个函数体内的所有a都是私有变量，跟外界没有任何关系；
  如果没有私有变量a：去上级作用域找，找不到，继续往上级找，如果找到window还没有的话，报错！
- 私有变量主要有两种
    + 函数体内带var的；
    + 形参
### 1.2内存释放：
- 内存包含：堆内存和栈内存
- 堆内存:用来存放数据的；
    + 对象数据类型的
        + 存的是键值对 key=value;
    + 函数数据类型的
        + 代码字符串
- 堆内存的释放：
    var a=[1,2,3,4]
    释放：a=null;
- 栈内存：本身提供了一个供JS代码执行的环境
    + 包含：全局作用域 和 私有作用域
- 全局作用域的形成和销毁：
    + 形成：当一个页面被浏览器加载完成的时候，全局作用域就形成了；
    + 销毁：1）关闭页面 2）关闭浏览器
- 私有作用域的形成和销毁：
    + 形成：当函数被调用的时候，会形成私有作用域
    + 销毁：一般情况下，但函数执行完成的时候，默认就被销毁了；但是两种情况下不销毁：
       + 不销毁：当函数体内的东西被外面的变量或者其他占用的话，就不销毁；
       + 不立即销毁：当函数执行完成的时候，会返回一个函数，被返回的函数还需要再执行一次；只有所有的调用都完成的时候，这个函数才能销毁；
       









