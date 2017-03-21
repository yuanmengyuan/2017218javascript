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
        + 更新：git remote update teacher
        + 拉到本地:git pull teacher master
    5. 想为老师的项目做贡献：
        + 把自己本地的代码，推送到自己远程
        + 请求自己远程的代码合并，跟老师项目的合并；










