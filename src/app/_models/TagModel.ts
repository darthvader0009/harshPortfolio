export class Tag {
  static readonly ANGULAR = new Tag('Angular', '#BDAA00');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'pink');
  static readonly AEM = new Tag('Adobe Experience Manager', 'red');
  static readonly CSS = new Tag('CSS', 'green');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly NODEJS = new Tag('Node.JS', 'brown');
  static readonly HTML = new Tag('HTML', 'purple');
  static readonly REACT = new Tag('React', 'blue');
  static readonly HTL = new Tag('Sightly', 'violet');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
