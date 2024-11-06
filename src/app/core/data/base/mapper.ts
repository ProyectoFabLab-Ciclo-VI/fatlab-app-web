// E = Entity, M = Model
export abstract class Mapper<E, M> {
    abstract mapFrom(entity: E): M;
    abstract mapTo(model: M): E;
}

export abstract class MapperList<E, M> {
    abstract mapFromList(entity: E[]): M[];
    abstract mapToList(model: M[]): E[];
}