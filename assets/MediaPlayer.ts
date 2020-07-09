
interface ConfigParams {
    el: HTMLMediaElement,
    plugins: Array <any>
}

class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config: ConfigParams) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }

    play() {
        this.media.play(); // play() is a method of the object video. Every element of the DOM has an API that has a set of methods or properties
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

toggleMute() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
}

export default MediaPlayer;