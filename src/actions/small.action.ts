import Action from "./action";

class Small extends Action {

  onPress(): void {
    return this.getNote();
  }

  public toString(): string {
    return "Small";
}
}

const small = new Small();
export default small;