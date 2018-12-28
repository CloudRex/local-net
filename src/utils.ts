export default abstract class NetUtils {
    public static isJson(string: string): boolean {
        return string.startsWith("{") && string.endsWith("}");
    }
}