export class Utilities {
    public static objectClone(obj: Object): Object {
        return Object.assign({}, obj);
    }
    public static isUrlValid(url: string) {
        const res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        if (res == null) {
            return false;
        } else {
            return true;
        }
    }

    public static getLocation(href: string) {
        const l = document.createElement('a');
        l.href = href;
        return l;
    }

    public static removeFromArray(e: any, array: any[]) {
        const index = array.indexOf(e);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    public static substractArrayAfromB(a: any[], b: any[], key: string) {
        for (let i = 0; i < b.length; i++) {
            const element = b[i];
            Utilities.removeElementByKeyFromArray(a, key, element[key]);
        }
    }

    public static removeElementByKeyFromArray(array: any[], key: string, value: any) {
        const index = array.findIndex(obj => obj[key] === value);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    // https://stackoverflow.com/questions/7313395/case-insensitive-replace-all
    public static removeSubstringRegardlessOfCase(str, strReplace, strWith) {
        const esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const reg = new RegExp(esc, 'ig');
        return str.replace(reg, strWith);
    }

    public static removeAccents(s) {
        let r = s.toLowerCase();
        r = r.replace(new RegExp(/\s/g), '');
        r = r.replace(new RegExp(/[àáâãäå]/g), 'a');
        r = r.replace(new RegExp(/[èéêë]/g), 'e');
        r = r.replace(new RegExp(/[ìíîï]/g), 'i');
        r = r.replace(new RegExp(/[òóôõö]/g), 'o');
        r = r.replace(new RegExp(/[ùúûü]/g), 'u');

        r = r.replace(new RegExp(/[ÀÁÂÄ]/g), 'A');
        r = r.replace(new RegExp(/[ÈÉÊË]/g), 'E');
        r = r.replace(new RegExp(/[ÌÍÎÏ]/g), 'I');
        r = r.replace(new RegExp(/[ÓÒÓÔÖ]/g), 'O');
        r = r.replace(new RegExp(/[ÙÚÛÜ]/g), 'U');

        return r;
    }

    // ¿generar ID unico?
    public static getUUID() {
        return Math.random()
            .toString(36)
            .substr(2, 9);
    }
}
