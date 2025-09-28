// ===================================================================
// PUSAT DATA ANDA (JSON)
// ===================================================================
const promptData = [
    // design/diagram
    {
        image: 'images/diagram1-output.png',
        title: 'Human Organ Model Display',
        category: 'Diagram',
        tags: ['Diagram'],
        prompt: `Draw [3D human organ model display example heart] for academic presentation, with annotations and explanations, suitable for showcasing its principles and [each organ's] functions, very realistic, highly detailed, with extremely fine design.`
    },
    // design/infographic
    {
        image: 'images/infographic1-output.png',
        title: 'Article Infographic',
        category: 'Infographic',
        tags: ['Infographic'],
        prompt: `Generate an infographic for the article content Requirements: 1. Translate the content into English and extract key information from the article 2. Keep the content in the image concise, only retaining the main title 3. Use English text in the image 4. Add rich and cute cartoon characters and elements`
    },
    {
        image: 'images/infographic2-output.png',
        title: 'Knowledge Reasoning Image Generation',
        category: 'Infographic',
        tags: ['Infographic'],
        prompt: `Make me an infographic of 5 tallest buildings in the world / Make a colorful infographic of the sweetest things on Earth`
    },
    {
        image: 'images/infographic3-output.png',
        title: 'Educational Comic',
        category: 'Infographic',
        tags: ['Infographic'],
        prompt: `Help me generate multiple 16:9 doodle-style images to explain the concept of "futures" to middle school students. The images should have a consistent colorful, thick-pencil hand-drawn style, be rich in information, feature English text, use solid color backgrounds, have outlines around the cards, and include uniform titles, similar to a PowerPoint presentation.`
    },
    // design/mockup
    {
        image: 'images/mockup1-output.png',
        imageInput: 'images/mockup1-input.png',
        title: 'Train Station Movie Poster',
        category: 'Mockup',
        tags: ['Mockup'],
        prompt: `Create a movie poster using the original image. The genre of the movie will be determined based on the atmosphere of the original image. Regardless of whether the original image is anime or live-action, the style and character design of the original image will be maintained as perfectly as possible. However, poses and expressions may be changed to match the poster design. Other people and objects may also be added at this time. The final generated image will be photorealistic. This does not apply to the poster design, as it will be based on the original image. The scenery of the underground passage of a Japanese station where the poster is posted will be recreated in a realistic image. People passing through the underground passage will be added. The reflection of the poster is angled to make it look more realistic.`
    },
    {
        image: 'images/mockup2-output.png',
        title: 'Make a Movie Poster',
        category: 'Mockup',
        tags: ['Mockup'],
        prompt: `Analyze the uploaded photo and detect the subject, mood, and atmosphere. Automatically classify the photo into a suitable movie genre (romance, action, mystery, horror, etc.). Based on the detected genre and mood, generate all the following elements in English: - A cinematic movie title (impactful, authentic to the genre). - A short tagline or catchphrase (1–2 lines, dramatic or emotional). - A credit block at the bottom (with fake names for director, producer, music, etc., styled like real movie posters). - A release note such as “COMING SOON” or “In Theaters 2025.” Overlay these elements on the image in a movie-poster style layout: - Place the title prominently in the center or lower third. - Place the tagline above or below the title. - Add a credit block at the bottom in small text. - Add the release note at the bottom center. Finally, add the starring section at the bottom, always formatted as: “Starring: ” Typography should be bold, dramatic, and genre-appropriate. The final result must look like a genuine movie poster ready for theaters, with all elements harmonized to the photo’s mood.`
    },
    // design/product
    {
        image: 'images/product1-output.png',
        title: 'Product Can Design',
        category: 'Product',
        tags: ['Product'],
        prompt: `Apply the design from Image 1 to the can in Image 2, and place it in a minimalist design setting, professional photography`
    },
    {
        image: 'images/product2-output.png',
        title: 'Hardware Exploded View',
        category: 'Product',
        tags: ['Product'],
        prompt: `Exploded view of a DSLR showing all its accessories and internal components such as lens, filter, internal components, lens, sensor, screws, buttons, viewfinder, housing, and circuit board. Maintain red accents of the DSLR`
    },
    {
        image: 'images/product3-output.png',
        imageInput: 'images/product3-input.png',
        title: 'Create an Itasha Car',
        category: 'Product',
        tags: ['Product'],
        prompt: `Create a professional photograph of a sporty car with anime-style character artwork as itasha (painted car) design, shot at a famous tourist destination or scenic landmark. The car features large, prominently displayed anime character illustrations with simple, clean design composition. The character artwork should be painted in vibrant anime art style with bold colors and clear details. Position the vehicle at a recognizable tourist spot or scenic location with good natural lighting that showcases both the car's sporty appearance and the character artwork. Use professional automotive photography techniques with proper depth of field to highlight the itasha design while incorporating the scenic background for tourism appeal, suitable for promotional or enthusiast marketing materials.`
    },
    // design/typography
    {
        image: 'images/typography1-output.png',
        title: 'Typographic Bicycle',
        category: 'Typography',
        tags: ['Typography'],
        prompt: `Create a minimalist black-and-white typographic illustration of the scene riding a bicycle using only the letters in the phrase ['riding a bicycle'] . Each letter should be creatively shaped or positioned to form the rider, the bicycle, and a sense of motion. The design should be clean, ultra-minimalist, and entirely composed of the modified ['riding a bicycle'] letters without adding any extra shapes or lines. The letters should flow or curve to mimic the natural form of the scene, while still remaining legible.`
    },
    {
        image: 'images/typography2-output.png',
        title: 'Typographic Logo Design',
        category: 'Typography',
        tags: ['Typography'],
        prompt: `Create a typographic illustration shaped like a {OBJECT}, where the text itself forms the shape — bold and playful lettering style that fills the entire silhouette — letters adapt fluidly to the curves and contours of the object — vibrant and contrasting color palette that fits the theme — background is solid and enhances the focus on the main shape — vector-style, clean, high resolution, poster format, 1:1 aspect ratio.`
    },
    {
        image: 'images/typography3-output.png',
        imageInput: 'images/typography3-input.png',
        title: 'Convert Text Diagram to Pictograms',
        category: 'Typography',
        tags: ['Typography'],
        prompt: `Convert this explanatory diagram into pictograms.`
    },
    // etc
    {
        image: 'images/etc1-output.png',
        imageInput: 'images/etc1-input.png',
        title: 'Red Pen Annotations',
        category: 'ETC',
        tags: ['ETC'],
        prompt: `Analyze this image. Use red pen to denote where you can improve.`
    },
    // 3d
    {
        image: 'images/3d1-output.png',
        imageInput: 'images/3d1-input.png',
        title: 'Illustration to Figure',
        category: '3D',
        tags: ['3D'],
        prompt: `turn this photo into a character figure. Behind it, place a box with the character's image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible`
    },
    {
        image: 'images/3d2-output.png',
        imageInput: 'images/3d2-input.png',
        title: 'Multi-View Result Generation',
        category: '3D',
        tags: ['3D'],
        prompt: `Generate the Front, Rear, Left, Right, Top, Bottom views on white. Evenly spaced. Consistent subject. Isometric Perspective Equivalence.`
    },
    {
        image: 'images/3d3-output.png',
        imageInput: 'images/3d3-input.png',
        title: 'Action Figure',
        category: '3D',
        tags: ['3D'],
        prompt: `make an action figure of me that says [“AI Evangelist - Kris”] and features [coffee, turtle, laptop, phone and headphones]`
    },
    {
        image: 'images/3d4-output.png',
        title: 'Control Character Face Shape',
        category: '3D',
        tags: ['3D'],
        prompt: `Design the character from Image 1 as a chibi version according to the face shape from Image 2`
    },
    {
        image: 'images/3d5-output.png',
        imageInput: 'images/3d5-input.png',
        title: 'LEGO Minifigure',
        category: '3D',
        tags: ['3D'],
        prompt: `Transform the person in the photo into a LEGO minifigure packaging box style, presented in isometric perspective. Label the box with the title "ZHOGUE". Inside the box, display the LEGO minifigure based on the person in the photo, along with their essential items (such as makeup, bags, or other items) as LEGO accessories. Beside the box, also display the actual LEGO minifigure itself, unpackaged, rendered in a realistic and vivid style.`
    },
    {
        image: 'images/3d6-output.png',
        imageInput: 'images/3d6-input.png',
        title: 'Gundam Model Figure',
        category: '3D',
        tags: ['3D'],
        prompt: `Transform the person in the photo into a Gundam model kit packaging box style, presented in isometric perspective. Label the box with the title "ZHOGUE". Inside the box, display a Gundam-style mechanical version of the person from the photo, along with their essentials (such as makeup, bags, or other items) redesigned as futuristic mechanical accessories. The packaging should resemble real Gunpla boxes, including technical illustrations, instruction manual-style details, and sci-fi fonts. Beside the box, also display the actual Gundam-style mechanical figure itself, outside the packaging, rendered in a realistic and lifelike style, similar to official Bandai promotional renders.`
    },
    {
        image: 'images/3d7-output.png',
        imageInput: 'images/3d7-input.png',
        title: 'Place Anime Statue in Real Life',
        category: '3D',
        tags: ['3D'],
        prompt: `A realistic photographic work. A gigantic statue of this person has been placed in a square in the center of Tokyo, with people looking up at it.`
    },
    {
        image: 'images/3d8-output.png',
        imageInput: 'images/3d8-input.png',
        title: 'Isometric Holographic Wireframe',
        category: '3D',
        tags: ['3D'],
        prompt: `Based on the uploaded image, convert it into a holographic depiction using wireframe lines only.`
    },
    {
        image: 'images/3d9-output.png',
        imageInput: 'images/3d9-input.png',
        title: 'Minecraft-Style Scene Generation',
        category: '3D',
        tags: ['3D'],
        prompt: `Using this location, create an isometric HD-2D Minecraft-style image of the landmark (buildings only).`
    },
    {
        image: 'images/3d10-output.png',
        title: 'Custom Marble Sculpture',
        category: '3D',
        tags: ['3D'],
        prompt: `A photorealistic image of an ultra-detailed sculpture of the subject in image made of shining marble. The sculpture should display smooth and reflective marble surface, emphasizing its luster and artistic craftsmanship. The design is elegant, highlighting the beauty and depth of marble. The lighting in the image should enhance the sculpture's contours and textures, creating a visually stunning and mesmerizing effect`
    },
    {
        image: 'images/3d11-output.png',
        title: 'Design a Chess Set',
        category: '3D',
        tags: ['3D'],
        prompt: `Draw a chessboard and a set of 3D-printable chess pieces inspired by this image.`
    },
    {
        image: 'images/3d12-output.png',
        title: 'Model Holographic Projection',
        category: '3D',
        tags: ['3D'],
        prompt: `Ultra-realistic product photo. Subject: virtual holographic character [CHARACTER], floating above a circular hologram projector Ø120 mm placed on a modern desk. Projection source rules: - If input reference is a 3D object → show a desktop 3D scanner beside the projector. Place the reference object on the scanner plate. The hologram above the projector is generated from this scanned object. - If input reference is a 2D image → show a modern PC with monitor on the desk. Display the reference image on the monitor screen. The hologram above the projector is generated from this screen content. Hologram rendering rules: - Character always appears as a semi-transparent volumetric image, background faintly visible through. - No beams, no particles, no solid statue surfaces. - Balanced anatomy (1/7–1/8 head-to-body ratio), correct proportions. - Natural pose with clear silhouette. - Hair, outfit folds, and accessories visible but translucent. - Face crisp and expressive, readable at 1000 px crop. - No copyrighted characters, no branded designs, no IP logos. Environment: modern desk with projector base + conditional device (scanner or monitor). Camera: 85–100 mm lens, 3/4 hero angle, eye-level, f/11–f/16, ISO100, tripod. Lighting: desk softly illuminated; holographic figure defined only by volumetric light. Background: seamless black studio with subtle reflections. Output: 4:5, 2048×2560. Negative: text-free, watermark-free, logo-free, brand-free, copyrighted characters, franchise IP, trademarked designs, resin, PVC, physical statue, opaque surfaces, toy gloss, beams, scanlines, dots, distortion, extra digits. Sampling: deterministic, seed=12345, temperature=0.`
    },
    {
        image: 'images/3d13-output.png',
        imageInput: 'images/3d13-input.png',
        title: 'Giant Figure Scaffolding',
        category: '3D',
        tags: ['3D'],
        prompt: `A hyper-realistic 3D render of the person in the image standing and taking a selfie. The giant figure is surrounded by massive scaffolding, with many tiny construction workers working on it. The scene is set in a city square, surrounded by modern buildings, moving vehicles (cars, buses), pedestrians, and a bright clear blue sky. The overall details are rich, presenting a photo-realistic texture with cinematic lighting effects.`
    },
    {
        image: 'images/3d14-output.png',
        imageInput: 'images/3d14-input.png',
        title: 'Component Extraction',
        category: '3D',
        tags: ['3D'],
        prompt: `Cut out each component and create a model sheet that retains the hologram.`
    },
    {
        image: 'images/3d15-output.png',
        imageInput: 'images/3d15-input.png',
        title: 'Isometric Conversion',
        category: '3D',
        tags: ['3D'],
        prompt: `Convert the image to isometric view`
    },
    {
        image: 'images/3d16-output.png',
        title: 'Miniature Store',
        category: '3D',
        tags: ['3D'],
        prompt: `Tiny diorama shop for [BRAND]. Roof made of oversized [PRODUCT], big [BRAND] logo sign above the window, vendor handing a [PRODUCT] to a customer, ground covered with many [PRODUCT]. Hand-made polymer-clay look, studio macro photo, soft light, shallow depth of field, vertical 3:4`
    },
    {
        image: 'images/3d17-output.png',
        imageInput: 'images/3d17-input.png',
        title: 'Custom Theme Park',
        category: '3D',
        tags: ['3D'],
        prompt: `Generates a photorealistic theme park image based on the original image. The theme park and the people enjoying it are depicted in an extremely photorealistic style. Daytime. Sunny. The color scheme and design are extracted from the original image and applied to the color scheme and design of various facilities. Vehicles and buildings based on the original image, mascot costumes that are a distorted version of the original image, and signs with the original image printed on them are placed within the image. The mascot costume design should use the original image as a motif, but be moderately distorted to create a photorealistic look. The sizes of the people and mascot costumes must not be unrealistic. Even if the original image is anime-style, the final image must be a photorealistic theme park. Be sure to follow these rules.`
    },
    // anime
    {
        image: 'images/anime1-output.png',
        imageInput: 'images/anime1-input.png',
        title: 'Hand Drawing Controls Multi-Character Poses',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `Have these two characters fight using the pose from Figure 3. Add appropriate visual backgrounds and scene interactions,Generated image ratio is 16:9`
    },
    {
        image: 'images/anime2-output.png',
        imageInput: 'images/anime2-input.png',
        title: 'Anime to Real Coser',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `Generate a photo of a girl cosplaying this illustration, with the background set at Comiket`
    },
    {
        image: 'images/anime3-output.png',
        imageInput: 'images/anime3-input.png',
        title: 'Pirate Wanted Poster',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `Using the original image, recreate a pirate's wanted poster drawn on parchment. Brown monochrome, with the texture of aged parchment. Retain the style and character design of the original image down to the smallest detail, and paste it large at the top of the wanted poster. A close-up of the face. Have the character wear a pirate hat. Write the bounty amount at the bottom of the poster. The bounty amount will be random, and a fictitious currency unit will be used. Below the bounty amount, write the crime in small letters. Use a fictitious language. English or Chinese characters may not be used.`
    },
    {
        image: 'images/anime4-output.png',
        imageInput: 'images/anime4-input.png',
        title: 'Comic Convention Booth',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `Erase the background and replace the characters with the following: Cosplayers and Character Goods Character/Motif: Character goods based on the illustration Hairstyle, Eyes, and Appearance: (Focus on merchandise, not the character itself.) Main Character: A cosplayer is holding a figurine in the center of the screen. Location: Comic Market (a doujinshi sales event). A spacious booth is filled with merchandise lined up on tables and shelves. The atmosphere is filled with excitement and anticipation. Merchandise Lineup: • A large, approximately 100cm figure is displayed in the center of the booth, creating an eye-catching display. • The character is displayed on an 80-inch LCD panel. • Acrylic Stands • Chibi Figures (Deformed) • Body Pillows (Large, Full-Length Character Print) • Jigsaw Puzzles (Using Character Artwork) • Stationery (Notebooks, Pens, Clear Files, etc.) • Desk Pads • Plush Toys (Deformed) Exhibition/Display: • Goods neatly arranged throughout the booth, creating a unified look. • Utilizing desks and shelves reminiscent of doujinshi sales events, the layout encourages fans to pick up items. • With the energy of the visitors as a backdrop, the venue is presented as a special "fan sanctuary." Overall Tone: A dreamlike sales space. While emphasizing cuteness and pop, the space evokes the unique enthusiasm of doujin events and the feeling of a "sanctuary for fan activities." Swarms of people. Image Quality: Photorealistic, 4K (4000px x 3000px)`
    },
    {
        image: 'images/anime5-output.png',
        imageInput: 'images/anime5-input.png',
        title: 'Become a Vtuber',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `Create a fictional Vtuber and their streaming screen using the original image. The Vtuber's hairstyle and clothing will be faithfully reproduced from the original image. The Vtuber image will be 2.5D-like, so it is not necessary to perfectly reproduce the style of the original image. A moderate sense of three-dimensionality is also necessary. The Vtuber's facial expression and pose may be changed from the original image. Have the Vtuber hold a game controller. Place only the Vtuber's upper body in the bottom right of the screen. Place the streaming screen of the game being played in the center of the screen. Place the chat screen on the left side of the screen. The screen ratio is set to a larger size for the game screen, and the upper half of the Vtuber's body is displayed smaller. The background of the original image is completely ignored, as well as the original image pose. Add a fictional streaming platform and browser UI to the top and bottom of the screen. The aspect ratio of the generated image is independent of that of the original image.`
    },
    {
        image: 'images/anime6-output.png',
        imageInput: 'images/anime6-input.png',
        title: 'Peephole Perspective',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `ultra-detailed anime illustration, fisheye lens peephole perspective, circular distorted view as if looking through a door peephole, warped wide-angle effect with curved edges, darkened vignette around the circular frame, two people leaning their faces close to the peephole trying to peek through, both with mischievous playful smiles, exaggerated perspective distortion making their features appear larger and curved, faces approaching the peephole lens, hallway or room interior bent by the lens effect, slightly blurry edges mimicking actual peephole optics, playful atmosphere, 8k resolution`
    },
    {
        image: 'images/anime7-output.png',
        imageInput: 'images/anime7-input.png',
        title: 'RPG Character Status UI',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `Use the character in the original image to create a character status screen for an RPG game. Keep the character design and style from the original image, but change the costume to one from a fantasy RPG. Also, change the pose to suit the situation. Display the character from the original image and the status screen side by side. The status screen will list various parameters, skills, icons, etc. The background should be a fantasy background that matches the style of the original image. The status screen should be rich and stylish, like a game from 2025.`
    },
    {
        image: 'images/anime8-output.png',
        imageInput: 'images/anime8-input.png',
        title: 'Drawing on a Pen Display',
        category: 'Anime',
        tags: ['Anime'],
        prompt: `Photorealistic pen tablet screen. Realistic first-person hand holding the pen tablet and pen. The original image is reproduced on the pen tablet in an unfinished state. The line art has been extracted from the original image. Portions of the line art have been colored with the same coloring as the original image. Unfinished coloring. Must not be monochrome. About 70% of the coloring is done. Close-up. The pen tip is touching the tablet screen.`
    },
    // building
    {
        image: 'images/building1-output.png',
        imageInput: 'images/building1-input.png',
        title: 'Extract 3d Building',
        category: 'Building',
        tags: ['Building'],
        prompt: `Make Image Daytime and Isometric [Building Only]`
    },
    {
        image: 'images/building2-output.png',
        imageInput: 'images/building2-input.png',
        title: 'Generate Ground View from Map Arrow',
        category: 'Building',
        tags: ['Building'],
        prompt: `draw what the red arrow sees / draw the real world view from the red circle in the direction of the arrow.`
    },
    {
        image: 'images/building3-output.png',
        imageInput: 'images/building3-input.png',
        title: 'Real World AR Information',
        category: 'Building',
        tags: ['Building'],
        prompt: `you are a location-based AR experience generator. highlight [point of interest] in this image and annotate relevant information about it.`
    },
    {
        image: 'images/building4-output.png',
        imageInput: 'images/building4-input.png',
        title: 'Map to Isometric',
        category: 'Building',
        tags: ['Building'],
        prompt: `Take this location and make the landmark an isometric image (building only), in the stvle of the game Theme Park`
    },
    {
        image: 'images/building5-output.png',
        imageInput: 'images/building5-input.png',
        title: 'Floor Plan 3D Render',
        category: 'Building',
        tags: ['Building'],
        prompt: `Convert this residential floor plan into an isometric, photo-realistic 3D rendering of the house.`
    },
    {
        image: 'images/building6-output.png',
        imageInput: 'images/building6-input.png',
        title: 'Scene A6 Folding Card',
        category: 'Building',
        tags: ['Building'],
        prompt: `Draw an A6 folding card: when opened, it reveals a complete 3D spherical tiny house with a miniature paper garden and a bonsai tree inside.`
    },
    {
        image: 'images/building7-output.png',
        imageInput: 'images/building7-input.png',
        title: 'Split Scene Photo',
        category: 'Building',
        tags: ['Building'],
        prompt: `A photo of a bedroom split down the middle: the left side is 2018 and the right side is 1964, in the same room.`
    },
    {
        image: 'images/building8-output.png',
        imageInput: 'images/building8-input.png',
        title: 'Building Extraction from Remote Sensing Image',
        category: 'Building',
        tags: ['Building'],
        prompt: `Remove everything in the image except the buildings.`
    },
    {
        image: 'images/building9-output.png',
        title: 'Contemporary Art Exhibition Space',
        category: 'Building',
        tags: ['Building'],
        prompt: `An avant-garde contemporary art exhibition space themed around the reference image. The entire exhibition hall (20.0 m x 20.0 m x 8.0 m) integrates architecture, lighting, flooring, walls, and ceiling into the artistic expression. At the far end of the hall stands a massive wall 20 meters wide and 8 meters high. In the center of this wall, the theme from the reference image is presented in a monumental artistic form. The image is vivid and three-dimensional, rising toward the viewer, becoming the focal point of the entire space. A system-generated exhibition title plaque is installed below the central wall. The title must be abstract, symbolic, and poetic, and must reflect a contemporary artwork. No price display is provided. The floor is polished granite with a reflectance of 0.35–0.40. Patterns and light derived from the reference image cascade across the surface of the work, resonating with the entire space as if responding to the footsteps of visitors. Tactile paving bricks are in a similar color, seamlessly integrated, but only 5 mm high, providing a clear texture. The work extends in a straight line from the entrance to the wall, creating a pause point before the artwork. After viewing, visitors are naturally guided to an opening on the right side (3 m wide x 3 m high). In emergencies, floor-level emergency lighting ensures illumination of 1 lux. The left and right walls and the ceiling each reinterpret an abstract element from the reference image, transforming the entire space into a single artwork. The flow of color, form, and light unifies the experience into an artistic whole. Visitor capacity is limited to 8–25 people. All visitors face the large wall, moving in a straight line and pausing at the designated point. No one looks back toward the entrance. Only one staff member is stationed near the right-side entrance beside the wall. All faces are blurred to ensure anonymity. The composition is stable, with the central vanishing point always aligned with the center of the wall. Verticality is within ±0.5°. Floor reflections are precise, human figures appear natural. Hands always show five fingers, eyes are symmetrical within a 3% margin. Fabrics remain flat with no deformation. Forbidden content: Elements unrelated to the reference image, missing or broken tactile paving, visitors facing the entrance, logos or watermarks, overcrowding, toy-like gloss, 2D flat projections, neon glow, teal-orange tones, oversaturation, perspective collapse, mismatched reflections, anatomical anomalies, extra limbs, distorted faces, excessive outlines, banding, or vignetting. DoD: The entire venue will be a contemporary artwork centered on the theme of the reference image, with the innermost structure forming a unified experience. The tactile paving synchronizes perfectly with the flow of light, creating a clear pause point. Visitors are immersed in the space itself, and even in reproduction, SSIM will remain stable at 0.95 or above.`
    }
];

// ===================================================================
// KODE INTI WEBSITE
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    // --- Elemen-elemen penting ---
    const promptGrid = document.getElementById('promptGrid');
    const searchInput = document.getElementById('searchInput');
    const navMenu = document.getElementById('navMenu');
    const homeBtn = document.getElementById('homeBtn');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const tagFilterBtn = document.getElementById('tagFilterBtn');
    const tagDropdownContent = document.getElementById('tagDropdownContent');
    const hamburger = document.getElementById('hamburger');
    const paginationContainer = document.getElementById('paginationContainer');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-btn');
    const promptCountElement = document.getElementById('promptCount');

    // --- VARIABEL STATE & PENGATURAN ---
    let currentPage = 1;
    const itemsPerPage = 12; // Menampilkan 12 item per halaman
    let currentActiveData = [...promptData];

    // --- FUNGSI-FUNGSI UTAMA ---

    /**
     * Fungsi utama untuk me-render kartu gambar dan paginasi.
     */
    function updateDisplay(dataToShow) {
        currentActiveData = dataToShow;
        const totalPages = Math.ceil(currentActiveData.length / itemsPerPage);
        
        // Pastikan currentPage tidak melebihi total halaman yang ada
        if (currentPage > totalPages) {
            currentPage = totalPages > 0 ? totalPages : 1;
        }

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedData = currentActiveData.slice(startIndex, endIndex);

        displayCards(paginatedData);
        setupPagination(totalPages);
    }

    /**
     * Menampilkan kartu-kartu di grid.
     */
    function displayCards(data) {
        promptGrid.innerHTML = '';
        if (data.length === 0) {
            promptGrid.innerHTML = '<p class="info-text">Tidak ada prompt yang cocok.</p>';
            return;
        }
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            let tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

            let imageHTML;
            if (item.imageInput) {
                imageHTML = `
                    <div class="card-image-container" data-modal-img="${item.image}">
                        <img src="${item.imageInput}" alt="Gambar Input" class="card-image img-input" loading="lazy">
                        <img src="${item.image}" alt="${item.title}" class="card-image img-output" loading="lazy">
                    </div>`;
            } else {
                imageHTML = `
                    <div class="card-image-container" data-modal-img="${item.image}">
                        <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
                    </div>`;
            }

            card.innerHTML = `
                ${imageHTML}
                <div class="card-content">
                    <h4 class="card-title">${item.title || 'Tanpa Judul'}</h4>
                    <div class="tags">${tagsHTML}</div>
                    <textarea class="prompt-text" readonly>${item.prompt}</textarea>
                    <button class="copy-btn">Copy</button>
                </div>`;
            promptGrid.appendChild(card);
        });
    }

    /**
     * Membuat dan menampilkan tombol-tombol paginasi.
     */
    function setupPagination(totalPages) {
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        const createButton = (text, onClick, isDisabled = false, isActive = false) => {
            const button = document.createElement('button');
            button.className = 'page-btn';
            button.textContent = text;
            button.disabled = isDisabled;
            if (isActive) button.classList.add('active');
            button.addEventListener('click', onClick);
            return button;
        };

        const prevHandler = () => {
            if (currentPage > 1) {
                currentPage--;
                updateDisplay(currentActiveData);
            }
        };
        paginationContainer.appendChild(createButton('<', prevHandler, currentPage === 1));

        for (let i = 1; i <= totalPages; i++) {
            const pageHandler = () => {
                currentPage = i;
                updateDisplay(currentActiveData);
            };
            paginationContainer.appendChild(createButton(i, pageHandler, false, i === currentPage));
        }

        const nextHandler = () => {
            if (currentPage < totalPages) {
                currentPage++;
                updateDisplay(currentActiveData);
            }
        };
        paginationContainer.appendChild(createButton('>', nextHandler, currentPage === totalPages));
    }

    /**
     * Membuat daftar tag unik untuk dropdown filter.
     */
    function createTagDropdown() {
        const allTags = [...new Set(promptData.flatMap(item => item.tags))];
        tagDropdownContent.innerHTML = '';
        allTags.sort().forEach(tag => {
            const tagButton = document.createElement('button');
            tagButton.className = 'filter-btn';
            tagButton.textContent = tag;
            tagButton.dataset.tag = tag;
            tagDropdownContent.appendChild(tagButton);
        });
    }

    // --- EVENT LISTENERS ---

    // Pencarian
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredData = promptData.filter(item => {
            const titleMatch = item.title && item.title.toLowerCase().includes(searchTerm);
            const promptMatch = item.prompt.toLowerCase().includes(searchTerm);
            const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return titleMatch || promptMatch || tagMatch;
        });
        currentPage = 1;
        updateDisplay(filteredData);
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    });

    // Filter Kategori dari Navbar
    navMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('category-filter-link')) {
            event.preventDefault();
            const categoryToFilter = event.target.dataset.category;
            const filteredData = promptData.filter(item => item.category === categoryToFilter);
            
            currentPage = 1;
            updateDisplay(filteredData);
            searchInput.value = '';
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
        }
    });
    
    // Filter by Tag (Hover & Klik)
    const tagDropdownContainer = document.querySelector('.tag-dropdown');
    tagDropdownContainer.addEventListener('mouseenter', () => tagDropdownContent.classList.add('show'));
    tagDropdownContainer.addEventListener('mouseleave', () => tagDropdownContent.classList.remove('show'));

    document.querySelector('.filter-controls').addEventListener('click', (event) => {
        if (!event.target.classList.contains('filter-btn') || event.target.id === 'tagFilterBtn') {
            return;
        }

        searchInput.value = '';
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        let filteredData;
        if (event.target.id === 'resetFilterBtn') {
            filteredData = promptData;
        } else {
            const clickedTag = event.target.dataset.tag;
            filteredData = promptData.filter(item => item.tags.includes(clickedTag));
        }

        currentPage = 1;
        updateDisplay(filteredData);
        tagDropdownContent.classList.remove('show');
    });
    
    // Tombol Reset Utama (Logo/Brand)
    homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = '';
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        resetFilterBtn.classList.add('active');
        currentPage = 1;
        updateDisplay(promptData);
    });

    // Tombol Kembali ke Atas
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Interaksi Modal Gambar, Copy, dan Hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    promptGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('copy-btn')) {
            const card = event.target.closest('.card');
            const promptText = card.querySelector('.prompt-text').value;
            navigator.clipboard.writeText(promptText).then(() => {
                event.target.textContent = 'Tersalin!';
                setTimeout(() => { event.target.textContent = 'Copy'; }, 2000);
            });
        }

        const imageContainer = event.target.closest('.card-image-container');
        if (imageContainer) {
            modal.style.display = "block";
            modalImg.src = imageContainer.dataset.modalImg;
        }
    });
    
    closeBtn.onclick = () => { modal.style.display = "none"; }
    modal.onclick = (event) => { if (event.target === modal) { modal.style.display = "none"; } }

    // --- INISIALISASI ---
    if (promptCountElement) {
        promptCountElement.textContent = promptData.length;
    }
    createTagDropdown();
    updateDisplay(promptData);
});
