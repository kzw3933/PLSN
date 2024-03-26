import { Expire, Key, StorageCls, Data, Result } from "./type";
import { Duration } from "./enum";



export class Storage implements StorageCls{
    set<T>(key: Key, value: T, expire: Expire = Duration.permanent): void {
        const data = {
            value,
            [Duration.expire]: expire // 过期时间
        }
        localStorage.setItem(key, JSON.stringify(data))
    }

    get<T>(key: Key): Result<T> {
        const value = localStorage.getItem(key)
        if (value) {
            const data: Data<T> = JSON.parse(value)
            const now = new Date().getTime()
            if(typeof data[Duration.expire] === 'number' && data[Duration.expire] < now) {
                this.remove(key)
                return {
                    message: `您的${key}已过期`,
                    value: null
                }
            } else {
                return {
                    message: "成功",
                    value: data.value
                }
            }
        } else {
            return {
                message: "值无效",
                value: null
            }
        }
    }

    remove(key: Key): void {
        localStorage.removeItem(key)
    }

    clear(): void {
        localStorage.clear()
    }
}