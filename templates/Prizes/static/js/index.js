tsParticles.load("tsparticles", {
    detectRetina: false,
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
            },
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                },
            },
            resize: true,
        
        },
        modes: {
            bubble: {
                distance: 30,
                duration: 2,
                opacity: 10,
                size: 6,
                speed: 2,
            },
            connect: {
                distance: 8,
                lineLinked: { opacity: 0.5 },
                radius: 60,
            },
            grab: {
                distance: 400,
                lineLinked: { opacity: 1 },
            },
            push: { quantity: 4 },
            remove: { quantity: 2 },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            slow: {
                active: false,
                radius: 0,
                factor: 1,
            },
        },
    },
    particles: {
        color: { value: "#ffffff" },
        lineLinked: {
            blink: false,
            color: "#ffffff",
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.4,
            width: 1,
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 600,
                    y: 1200,
                },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            value: 500,
            density: {
                enable: false,
                area: 500,
            },
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false,
            },
            random: false,
            value: 0.4,
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
            },
            image: {
                height: 100,
                replaceColor: true,
                src: "images/github.svg",
                width: 100,
            },
            polygon: { sides: 5 },
            stroke: {
                color: "#ffffff",
                width: 1,
            },
            type: "square",
        },
        size: {
            animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 400,
                sync: true,
            },
            random: true,
            value: 3,
        },
    },
    polygon: {
        draw: {
            enable: true,
            lineColor: "rgba(255,255,255,0.2)",
            lineWidth: 0.5,
        },
        move: {
            radius: 5,
        },
        inlineArrangement: "equidistant",
        scale: 0.8,
        type: "inline",
        url: "static/img/trophy.svg",
    },
});
var stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
var count_particles = document.querySelector(".js-count-particles");
var update = function () {
    stats.begin();
    stats.end();
    if (tsParticles.domItem(0).particles.array) {
        count_particles.innerText = tsParticles.domItem(
            0
        ).particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
