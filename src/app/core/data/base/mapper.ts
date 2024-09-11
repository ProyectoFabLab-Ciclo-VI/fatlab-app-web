// E = Entity, M = Model
export abstract class Mapper<E, M> {
    abstract mapFrom(t: E): M;
    abstract mapTo(r: M): E;
}

export abstract class MapperList<E, M> {
    abstract mapFromList(t: E[]): M[];
    abstract mapToList(r: M[]): E[];
}