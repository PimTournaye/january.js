import Action from "./action";
import Intervals from "../logic/Intervals";
import note from "../logic/Note";

class Harmony extends Action {
	onPress() {
		this.getNote();
		Harmony.getHarmonyTone();

		return [this.getNote(), Harmony.getHarmonyTone()]
	}

	private static getHarmonyTone() {
		let harmonyTone: string | undefined;
		let choices: Array<string | undefined>;
		let intervals = Intervals.loadout;

		// convert the above logic to a switch statement
		switch (note.lastPlayed) {
			case intervals.get("one1"):
				choices = [
					intervals.get("thr1"),
					intervals.get("fiv1"),
					intervals.get("thr2"),
					intervals.get("fiv2"),
				];
				break;
			case intervals.get("two1"):
				choices = [
					intervals.get("fiv1"),
					intervals.get("sev1"),
					intervals.get("fiv2"),
				];
				break;
			case intervals.get("thr1"):
				choices = [intervals.get("fiv1"), intervals.get("one2")];
				break;
			case intervals.get("for1"):
				choices = [
					intervals.get("fiv1"),
					intervals.get("one2"),
					intervals.get("two2"),
				];
				break;
			case intervals.get("fiv1"):
				choices = [
					intervals.get("thr1"),
					intervals.get("sev1"),
					intervals.get("thr2"),
				];
				break;
			case intervals.get("six1"):
				choices = [intervals.get("one2"), intervals.get("thr2")];
				break;
			case intervals.get("sev1"):
				choices = [
					intervals.get("thr1"),
					intervals.get("fiv1"),
					intervals.get("thr2"),
				];
				break;
			case intervals.get("one2"):
				choices = [
					intervals.get("fiv1"),
					intervals.get("thr2"),
					intervals.get("fiv2"),
				];
				break;
			case intervals.get("two2"):
				choices = [
					intervals.get("fiv1"),
					intervals.get("fiv2"),
					intervals.get("sev2"),
				];
				break;
			case intervals.get("thr2"):
				choices = [
					intervals.get("sev1"),
					intervals.get("one2"),
					intervals.get("fiv2"),
					intervals.get("sev2"),
					intervals.get("one3"),
				];
				break;
			case intervals.get("for2"):
				choices = [
					intervals.get("two2"),
					intervals.get("fiv2"),
					intervals.get("one3"),
				];
				break;
			case intervals.get("fiv2"):
				choices = [
					intervals.get("thr2"),
					intervals.get("sev2"),
					intervals.get("thr3"),
				];
				break;
			case intervals.get("six2"):
				choices = [intervals.get("one3"), intervals.get("thr3")];
				break;
			case intervals.get("sev2"):
				choices = [
					intervals.get("thr2"),
					intervals.get("fiv2"),
					intervals.get("thr3"),
				];
				break;
			case intervals.get("one3"):
				choices = [
					intervals.get("thr2"),
					intervals.get("fiv2"),
					intervals.get("thr3"),
					intervals.get("fiv3"),
				];
				break;
			case intervals.get("two3"):
				choices = [
					intervals.get("fiv2"),
					intervals.get("sev2"),
					intervals.get("fiv3"),
				];
				break;
			case intervals.get("thr3"):
				choices = [
					intervals.get("sev2"),
					intervals.get("one3"),
					intervals.get("fiv3"),
					intervals.get("sev3"),
					intervals.get("one4"),
				];
				break;
			case intervals.get("for3"):
				choices = [
					intervals.get("two3"),
					intervals.get("fiv3"),
					intervals.get("one4"),
				];
				break;
			case intervals.get("fiv3"):
				choices = [
					intervals.get("thr3"),
					intervals.get("sev3"),
					intervals.get("one4"),
				];
				break;
			case intervals.get("six3"):
				choices = [intervals.get("thr3"), intervals.get("one4")];
				break;
			case intervals.get("sev3"):
				choices = [intervals.get("thr3"), intervals.get("fiv3")];
				break;
			case intervals.get("one4"):
				choices = [intervals.get("thr3"), intervals.get("fiv3")];
				break;
			default:
				choices = [intervals.get("one1")];
				break;
		}

		const choice = choices[Math.floor(Math.random() * choices.length)];
		harmonyTone = choice;

		note.lastHarmony = harmonyTone;
		return harmonyTone;
	}

	public toString(): string {
		return "Harmony";
	}
}

const harmony = new Harmony();
export default harmony;
