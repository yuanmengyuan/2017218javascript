- box-shadow:正数向右偏移量   正数向下偏移量 模糊度  扩展半径 color  inset(內阴影)；
inset只能写在第一个或最后一个；而且还以省略（外阴影）
平常简写 `box-shadow:1px 1px 10px color`;
- 变形 transform：
    - 角度的旋转 rotate(x,y,z)   rotateX()  rotateY() rotateZ()
    - 位移： translate(x,y)   translateX(10px) translateY(200px)
    - 比例缩放： scale(.5)   scale(1.5)
- 过渡：1）谁运动，就在谁身上加
transition:指定让运动哪个属性(all:所有)  1s ease-in/ease-out/ease-in-out  延迟
- transition和animation之间的区别：前者需要事件触发，后者，不需要触发；
- 