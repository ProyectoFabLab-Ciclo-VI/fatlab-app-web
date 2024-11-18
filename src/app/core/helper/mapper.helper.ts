import { Mapper } from "../data/base/mapper";

export class MapperHelper {
    stringMapFrom(value: string | undefined): string {
        return value ?? '';
    }

    stringMapTo(value: string): string | undefined {
        return value != '' ? value : undefined;
    }

    numberMapFrom(value: number | undefined): number {
        return value ?? 0;
    }

    numberMapTo(value: number): number | undefined {
        return value != 0 ? value : undefined;
    }

    objectMapFrom<E,M>(obj: E | undefined, mapper: Mapper<E, M>): M | null {
        if(obj == undefined) return null;
        return mapper.mapFrom(obj);
    }

    objectMapTo<E,M>(obj: M | null, mapper: Mapper<E, M>): E | undefined{
        if(obj == null) return undefined;
        return mapper.mapTo(obj);
    }
}