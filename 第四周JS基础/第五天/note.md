- 如何把本地的普通文件夹，变成git可以管理的仓库:
    - 新建一个普通文件夹
    — 左手shift,右键选择"在此处打开命令行"
    - git init
`Initialized empty Git repository in /Users/zhanglei/Desktop/quanmengyuan2017218/.git/`
- 当普通的文件夹，变成git仓库的时候，里面就有一个.git文件夹，如果肉眼看不到，可以使用命令来看：
    - git ls -A  (git dir -all)
- 如何把本地仓库的内容推送到自己的远程仓库；（git工作流）
    - 添加远程仓库：（自己的远程通道的名称一般都叫:origin）
    git remote add origin https://github.com/yuanmengyuan/yuanmengpeixun2017218.git
    把本地仓库的内容，推送到远程仓库需要3步骤：
    - git add .
    - git commit -m"注释：这是第一周的课件"
    - git push origin master
- 小总结
    + 建立本地仓库
        + 新建一个文件夹，git init
        + cmd命令行，也可以使用git bash
    + 建立远程仓库：
        + 看截图
    + 本地仓库连接远程仓库
        + 查看本地仓库已经连接了哪些仓库？ git remote -v
        + 删除已连接的远程仓库 git remote rm origin
        + 添加远程仓库  git remote add origin 地址
    + 把本地仓库的内容推送到远程仓库
        1. git add .
        2. git commit -m"xxxx"
        3. git push origin master
    + 一些常用的命令
        + 进入某个文件夹  cd xxx
        + 返回上级 cd ../
        + 返回根目录 cd /
        + 清屏 clear / cls
        + 查看当前目录下有哪些子文件 ls / dir
- 作业：
    + 考试题：标准：自测达到满分；
    + 算法：
        - 快排 冒排 插排 去重（5种）
    + git的基本操作；
    + 预习视频：14期 预习面向对象
    + 几个小时的放空
        
         
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    