import { Duration } from "../enum"

export type Key = string
export type Expire= Duration.permanent | number

export interface Result<T> {
    message: string
    value: T | null
}

export interface Data<T> {
    value: T,
    [Duration.expire]: Expire
}

export interface StorageCls {
    get<T>(key: Key): Result<T>
    set<T>(key: Key, value: T, expire: Expire): void
    remove(key: Key): void
    clear(): void
}