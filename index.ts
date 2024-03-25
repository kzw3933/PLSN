// 抽象类

// 在abstract类中使用abstract修饰的方法只能描述，不能实现
// 抽象类无法实例化
abstract class Vue {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    abstract init(name: string): void

}


class VueImpl extends Vue {
    constructor(name: string) {
        super(name);
    }
    init(name: string) {

    }
}