import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(value: string) {
        if (!value) return null;
        let words = value.split(" ");
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (i != 0 && this.ShouldBeLowerCase(word))
                words[i] = word.toLocaleLowerCase();
            else
                words[i] = this.FirstLetterUppercase(word);
        }

        return words.join(" ");
    }

    private FirstLetterUppercase(word: string): string {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLocaleLowerCase();
    }

    private ShouldBeLowerCase(word: string): boolean {
        let preArr = ['the', 'of'];
        return preArr.includes(word.toLowerCase());
    }
}