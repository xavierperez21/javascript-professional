import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;

        // We have to bind the 'this' of the instance because when the intersectionObserver...
        //...detects the threshold this object 'IntesectionObserver' executes the method 'handleIntersection'...
        //...thus 'this' refers to IntersectionObserver and we don't want that.
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player: MediaPlayer) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        })  // First argument is the one who notifys and the second the one who makes a configuration of the object we are handling

        observer.observe(player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }

    }

    private handleVisibilityChange () {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play()
        }
        else {
            this.player.pause();
        }
    }
}

export default AutoPause;