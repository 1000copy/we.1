//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    userInfo:"罐",
    icons : [1,2, 3, 4],
    typestr : "可回收垃圾 有害垃圾 湿垃圾 干垃圾",
    remark: [
      "指废纸张、废塑料、废玻璃制品、废金属、废织物等适宜回收、可循环利用的生活废弃物",
      "指废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物", 
      "即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等易腐的生物质生活废弃物", 
      "即其它垃圾，指除可回收物、有害垃圾、湿垃圾以外的其它生活废弃物" ],
    garbage : [`废纸张 纸板箱 报纸 废弃书本 快递纸袋 打印纸 信封 广告单 纸塑铝复合包装 利乐包 废塑料 食品与日用品塑料瓶盖 饮料瓶 奶瓶 洗发水瓶 乳液罐 食用油桶 塑料碗 盆 塑料盒子 食品保鲜盒 收纳盒 塑料玩具 塑料积木 塑料模型 塑料衣架 施工安全帽 PE塑料 pvc 亚克力板 塑料卡片 密胺餐具 kt板 泡沫 泡沫塑料 水果网套 废玻璃制品 食品及日用品玻璃瓶罐 调料瓶 酒瓶 化妆品瓶 玻璃杯 窗玻璃 玻璃制品 放大镜 玻璃摆件 碎玻璃 废金属 金属瓶罐 易拉罐 食品罐/桶 金属厨具 菜刀 锅 金属工具 刀片 指甲剪 螺丝刀 金属制品 铁钉 铁皮 铝箔 废织物 旧衣服 床单 枕头 棉被 皮鞋 毛绒玩具 布偶 棉袄 包 皮带 丝绸制品 电路板 主板 内存条 充电宝 电线 插头 木制品 积木 砧板`,

     `废镍镉电池 废氧化汞电池 充电电池 镉镍电池 铅酸电池 蓄电池 纽扣电池 废荧光灯管 荧光灯管 日光灯管 卤素 废药品及其包装物 过期药物 药物胶囊 药片 药品内包装 废油漆和溶剂及其包装物 废油漆桶 染发剂壳 过期的指甲油 洗甲水 废矿物油及其包装物 废含汞温度计 废含汞血压计 水银血压计 水银体温计 水银温度计 废杀虫剂及其包装 老鼠药 毒鼠强 杀虫喷雾罐 废胶片及废相纸 x光片等感光胶片 相片底片`,

     `食材废料 谷物及其加工食品 米 米饭 面 面包 豆类  肉蛋及其加工食品 鸡 鸭 猪 牛 羊肉 蛋 动物内脏 腊肉 午餐肉 蛋壳  水产及其加工食品 鱼 鱼鳞 虾 虾壳 鱿鱼  蔬菜 绿叶菜 根茎蔬菜 菌菇  调料 酱料 剩菜剩饭 火锅汤底 沥干后的固体废弃物  鱼骨 碎骨 茶叶渣 咖啡渣 过期食品 糕饼 糖果 风干食品 肉干 红枣 中药材  粉末类食品 冲泡饮料 面粉  宠物饲料 瓜皮果核 水果果肉 椰子肉  水果果皮 西瓜皮 桔子皮 苹果皮  水果茎枝 葡萄枝  果实 西瓜籽 花卉植物 家养绿植 花卉 花瓣 枝叶 中药药渣`,

      `餐巾纸 卫生间用纸 尿不湿 猫砂 狗尿垫 污损纸张 烟蒂 干燥剂 污损塑料 尼龙制品 编织袋 防碎气泡膜 大骨头 硬贝壳 硬果壳 椰子壳 榴莲壳 核桃壳 玉米衣 甘蔗皮  硬果实 榴莲核 菠萝蜜核 毛发 灰土 炉渣 橡皮泥 太空沙 带胶制品 胶水 胶带  花盆 毛巾 一次性餐具 镜子 陶瓷制品 竹制品 竹篮 竹筷 牙签 成分复杂的制品 伞 笔 眼镜 打火机 `]
  }
})