// SOLID
// Single Responsibility Principle
// SRP  
/**
 * اصول سالید قانون اول
 * اصل تک مسئولیتی
 * S word
 * این اصل توضیح میدهد که هر کلاس فقط مخصوص انجام یک کار است 
 * بطور مثال اگر کلاسی برای اعتبار سنجی داد ها ساختید
 * نباید در کلاس کاری بغیر از وضایف اعتبار سنجی انجام دهید
 * بطور مثال کلاس ریکویست ولیدیشن در لاراول که این مثال را پیاده سازی کرده
 */

const fs = require('fs');

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    // save(filename)
    // {
    //   fs.writeFileSync(filename, this.toString());
    // }
    //
    // load(filename)
    // {
    //   //
    // }
    //
    // loadFromUrl(url)
    // {
    //   //
    // }
}
Journal.count = 0;

class PersistenceManager {
    preprocess(j) {
        //
    }

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let p = new PersistenceManager();
let filename = 'c:/temp/journal.txt';
p.saveToFile(j, filename);

// separation of concerns