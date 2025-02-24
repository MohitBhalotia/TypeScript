abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

// const mohit =new TakePhoto("Test","test")// -> We cannot create a object from an abstract class , it justr provides a blueprint

const mb = new Instagram("test", "test", 3);
mb.getReelTime();
export {};
