export class Country {
  constructor(
    readonly name: string,
    readonly courseName: string,
    readonly courseSymbol: string
  ) {}

  public toString(): string {
    return this.name;
  }
}
