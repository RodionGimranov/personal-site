import Matter from "matter-js";

type PhycalsIconsConfig = {
    width: number;
    height: number;
    iconSize: number;
    gravity: number;
};

export type PhycalsIconsInstance = {
    engine: Matter.Engine;
    world: Matter.World;
    render: Matter.Render;
    icons: Matter.Body[];
    destroy: () => void;
};

export function phycalsIcons(): PhycalsIconsInstance | void {
    const ICON_TEXTURES: string[] = [
        "https://res.cloudinary.com/dii7e7hu0/image/upload/v1766037591/Group_4_twqcsl.svg",
        "https://res.cloudinary.com/dii7e7hu0/image/upload/v1766037590/Frame_1171275075_lfycqg.svg",
        "https://res.cloudinary.com/dii7e7hu0/image/upload/v1766037590/Frame_1171275074_ceg1dk.svg",
        "https://res.cloudinary.com/dii7e7hu0/image/upload/v1766037589/Frame_1171275073_iu5xcn.svg",
        "https://res.cloudinary.com/dii7e7hu0/image/upload/v1766037588/Frame_1171275069_j7kpnq.svg",
        "https://res.cloudinary.com/dii7e7hu0/image/upload/v1766037589/Frame_1171275072_damtno.svg",
        "https://res.cloudinary.com/dii7e7hu0/image/upload/v1766037588/Frame_1171275071_pzb9mo.svg",
    ];

    const CONFIG: PhycalsIconsConfig = {
        width: 250,
        height: 520,
        iconSize: 60,
        gravity: 0.8,
    };

    const WALL_THICKNESS = 2;
    const OUT_MARGIN = 100;

    const container = document.getElementById("phycalsIcons") as HTMLElement | null;
    if (!container) {
        console.error('Container with id "phycalsIcons" not found');
        return;
    }

    const engine = Matter.Engine.create();
    const world = engine.world;
    world.gravity.y = CONFIG.gravity;

    const render = Matter.Render.create({
        element: container,
        engine,
        options: {
            width: CONFIG.width,
            height: CONFIG.height,
            pixelRatio: window.devicePixelRatio || 1,
            wireframes: false,
            background: "transparent",
        },
    });

    function createWalls(): Matter.Body[] {
        const w = CONFIG.width;
        const h = CONFIG.height;
        const t = WALL_THICKNESS;

        return [
            Matter.Bodies.rectangle(w / 2, h - t / 2, w, t, {
                isStatic: true,
                render: { visible: false },
            }),
            Matter.Bodies.rectangle(w / 2, t / 2, w, t, {
                isStatic: true,
                render: { visible: false },
            }),
            Matter.Bodies.rectangle(t / 2, h / 2, t, h, {
                isStatic: true,
                render: { visible: false },
            }),
            Matter.Bodies.rectangle(w - t / 2, h / 2, t, h, {
                isStatic: true,
                render: { visible: false },
            }),
        ];
    }

    Matter.World.add(world, createWalls());

    function createIcon(x: number, y: number, textureUrl: string): Matter.Body {
        const size = CONFIG.iconSize;

        return Matter.Bodies.rectangle(x, y, size, size, {
            restitution: 0.6,
            friction: 0.3,
            frictionAir: 0.01,
            render: {
                sprite: {
                    texture: textureUrl,
                    xScale: 1,
                    yScale: 1,
                },
            },
        });
    }

    function spawnIcon(textureUrl: string, x?: number, y?: number): Matter.Body {
        const half = CONFIG.iconSize / 2;

        const px =
            x ??
            Math.random() * (CONFIG.width - 2 * (half + WALL_THICKNESS)) + half + WALL_THICKNESS;

        const py = y ?? WALL_THICKNESS + half + 25;

        const body = createIcon(px, py, textureUrl);

        Matter.World.add(world, body);
        Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 0.1 });

        return body;
    }

    const icons: Matter.Body[] = [];
    const half = CONFIG.iconSize / 2;

    const rows: number[] = [
        WALL_THICKNESS + half + 50,
        WALL_THICKNESS + half + 120,
        WALL_THICKNESS + half + 190,
    ];

    ICON_TEXTURES.forEach((tex, i) => {
        const rowIndex = Math.floor(i / 3);
        const rowY = rows[rowIndex] ?? rows[rows.length - 1];

        const perRow = rowIndex === 2 ? 2 : 3;
        const colX = ((i % 3) + 0.5) * (CONFIG.width / perRow);

        icons.push(spawnIcon(tex, colX, rowY));
    });

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: Matter.Mouse.create(render.canvas),
        constraint: { stiffness: 0.2, render: { visible: false } },
    });

    Matter.World.add(world, mouseConstraint);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    let rafId: number | null = null;

    function update(): void {
        for (let i = icons.length - 1; i >= 0; i--) {
            const icon = icons[i];
            if (!icon) continue;

            const bnd = icon.bounds;

            const outAbove = bnd.max.y < -OUT_MARGIN;
            const outBelow = bnd.min.y > CONFIG.height + OUT_MARGIN;
            const outLeft = bnd.max.x < -OUT_MARGIN;
            const outRight = bnd.min.x > CONFIG.width + OUT_MARGIN;

            if (outAbove || outBelow || outLeft || outRight) {
                const texture =
                    icon.render?.sprite?.texture ??
                    ICON_TEXTURES[Math.floor(Math.random() * ICON_TEXTURES.length)]!;

                Matter.World.remove(world, icon);
                icons.splice(i, 1);

                window.setTimeout(() => {
                    const newIcon = spawnIcon(texture);
                    icons.push(newIcon);
                }, 500);
            }
        }

        rafId = requestAnimationFrame(update);
    }

    update();

    return {
        engine,
        world,
        render,
        icons,

        destroy(): void {
            if (rafId !== null) cancelAnimationFrame(rafId);

            Matter.Render.stop(render);
            Matter.Runner.stop(runner);

            Matter.World.clear(world, false);
            Matter.Engine.clear(engine);

            if (render.canvas?.parentNode) {
                render.canvas.parentNode.removeChild(render.canvas);
            }

            (render.textures as Record<string, unknown>) = {};

            icons.length = 0;
        },
    };
}
