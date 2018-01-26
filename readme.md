### 运行React Native程序
- npm install
- npm start
- ~/Android/Sdk/platform-tools/adb reverse tcp:8081 tcp:8081
- react-native run-android
### 自定义控件给js调用
1. 创建自定义控件GradientColorView
1. 继承SimpleViewManager <GradientColorView>覆写createViewInstance和getName
1. SimpleViewManager中：用@ReactProp修饰控件属性的set方法
1. 在Application中的getPackages的方法返回值中添加该Manager


### react-native-fs模块的导入
1. npm install react-native-fs --save
1. react-native link react-native-fs
1. AndroidManifest.xml添加读写权限
1. npm start
1. react-native run-android