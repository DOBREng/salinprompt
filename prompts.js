// ===================================================================
// PUSAT DATA ANDA (JSON)
// ===================================================================
const promptData = [
    // ... (SELURUH DATA JSON ANDA TETAP DI SINI, TIDAK ADA PERUBAHAN)
    {//==============================Diagram=======================
        image: 'images/diagram1-output.png',
        title: 'Human Organ Model Display',
        category: 'Diagram',
        tags: ['diagram'],
        prompt: `Draw [3D human organ model display example heart] for academic presentation, with annotations and explanations, suitable for showcasing its principles and [each organ's] functions, very realistic, highly detailed, with extremely fine design.`
    },
    // design/infographic
    {//================================Infographic=======================
        image: 'images/infographic1-output.png',
        title: 'Article Infographic',
        category: 'Infographic',
        tags: ['infographic'],
        prompt: `Generate an infographic for the article content Requirements: 1. Translate the content into English and extract key information from the article 2. Keep the content in the image concise, only retaining the main title 3. Use English text in the image 4. Add rich and cute cartoon characters and elements`
    },
    {//=================================Infographic=======================
        image: 'images/infographic2-output.png',
        title: 'Knowledge Reasoning Image Generation',
        category: 'Infographic',
        tags: ['infographic'],
        prompt: `Make me an infographic of 5 tallest buildings in the world / Make a colorful infographic of the sweetest things on Earth`
    },
    {//===============================Infographic=======================
        image: 'images/infographic3-output.png',
        title: 'Educational Comic',
        category: 'Infographic',
        tags: ['infographic'],
        prompt: `Help me generate multiple 16:9 doodle-style images to explain the concept of "futures" to middle school students. The images should have a consistent colorful, thick-pencil hand-drawn style, be rich in information, feature English text, use solid color backgrounds, have outlines around the cards, and include uniform titles, similar to a PowerPoint presentation.`
    },
    {//================================Mockup=======================
        image: 'images/mockup1-output.png',
        imageInput: 'images/mockup1-input.png',
        title: 'Train Station Movie Poster',
        category: 'Mockup',
        tags: ['mockup'],
        prompt: `Create a movie poster using the original image. The genre of the movie will be determined based on the atmosphere of the original image. Regardless of whether the original image is anime or live-action, the style and character design of the original image will be maintained as perfectly as possible. However, poses and expressions may be changed to match the poster design. Other people and objects may also be added at this time. The final generated image will be photorealistic. This does not apply to the poster design, as it will be based on the original image. The scenery of the underground passage of a Japanese station where the poster is posted will be recreated in a realistic image. People passing through the underground passage will be added. The reflection of the poster is angled to make it look more realistic.`
    },
    {//================================Mockup=======================
        image: 'images/mockup2-output.png',
        title: 'Make a Movie Poster',
        category: 'Mockup',
        tags: ['mockup'],
        prompt: `Analyze the uploaded photo and detect the subject, mood, and atmosphere. Automatically classify the photo into a suitable movie genre (romance, action, mystery, horror, etc.). Based on the detected genre and mood, generate all the following elements in English: - A cinematic movie title (impactful, authentic to the genre). - A short tagline or catchphrase (1–2 lines, dramatic or emotional). - A credit block at the bottom (with fake names for director, producer, music, etc., styled like real movie posters). - A release note such as “COMING SOON” or “In Theaters 2025.” Overlay these elements on the image in a movie-poster style layout: - Place the title prominently in the center or lower third. - Place the tagline above or below the title. - Add a credit block at the bottom in small text. - Add the release note at the bottom center. Finally, add the starring section at the bottom, always formatted as: “Starring: ” Typography should be bold, dramatic, and genre-appropriate. The final result must look like a genuine movie poster ready for theaters, with all elements harmonized to the photo’s mood.`
    },
    {//================================Product=======================
        image: 'images/product1-output.png',
        title: 'Product Can Design',
        category: 'Product',
        tags: ['product'],
        prompt: `Apply the design from Image 1 to the can in Image 2, and place it in a minimalist design setting, professional photography`
    },
    {//================================Product=======================
        image: 'images/product2-output.png',
        title: 'Hardware Exploded View',
        category: 'Product',
        tags: ['product'],
        prompt: `Exploded view of a DSLR showing all its accessories and internal components such as lens, filter, internal components, lens, sensor, screws, buttons, viewfinder, housing, and circuit board. Maintain red accents of the DSLR`
    },
    {//================================Product=======================
        image: 'images/product3-output.png',
        imageInput: 'images/product3-input.png',
        title: 'Create an Itasha Car',
        category: 'Product',
        tags: ['product'],
        prompt: `Create a professional photograph of a sporty car with anime-style character artwork as itasha (painted car) design, shot at a famous tourist destination or scenic landmark. The car features large, prominently displayed anime character illustrations with simple, clean design composition. The character artwork should be painted in vibrant anime art style with bold colors and clear details. Position the vehicle at a recognizable tourist spot or scenic location with good natural lighting that showcases both the car's sporty appearance and the character artwork. Use professional automotive photography techniques with proper depth of field to highlight the itasha design while incorporating the scenic background for tourism appeal, suitable for promotional or enthusiast marketing materials.`
    },
    {//================================Typography=======================
        image: 'images/typography1-output.png',
        title: 'Typographic Bicycle',
        category: 'Typography',
        tags: ['typography'],
        prompt: `Create a minimalist black-and-white typographic illustration of the scene riding a bicycle using only the letters in the phrase ['riding a bicycle'] . Each letter should be creatively shaped or positioned to form the rider, the bicycle, and a sense of motion. The design should be clean, ultra-minimalist, and entirely composed of the modified ['riding a bicycle'] letters without adding any extra shapes or lines. The letters should flow or curve to mimic the natural form of the scene, while still remaining legible.`
    },
    {//================================Typography=======================
        image: 'images/typography2-output.png',
        title: 'Typographic Logo Design',
        category: 'Typography',
        tags: ['typography'],
        prompt: `Create a typographic illustration shaped like a {OBJECT}, where the text itself forms the shape — bold and playful lettering style that fills the entire silhouette — letters adapt fluidly to the curves and contours of the object — vibrant and contrasting color palette that fits the theme — background is solid and enhances the focus on the main shape — vector-style, clean, high resolution, poster format, 1:1 aspect ratio.`
    },
    {//================================Typography=======================
        image: 'images/typography3-output.png',
        imageInput: 'images/typography3-input.png',
        title: 'Convert Text Diagram to Pictograms',
        category: 'Typography',
        tags: ['typography'],
        prompt: `Convert this explanatory diagram into pictograms.`
    },
    {//================================ETC=======================
        image: 'images/etc1-output.png',
        imageInput: 'images/etc1-input.png',
        title: 'Red Pen Annotations',
        category: 'ETC',
        tags: ['etc'],
        prompt: `Analyze this image. Use red pen to denote where you can improve.`
    },
    {//================================3D=======================
        image: 'images/3d1-output.png',
        imageInput: 'images/3d1-input.png',
        title: 'Illustration to Figure',
        category: '3D',
        tags: ['3d'],
        prompt: `turn this photo into a character figure. Behind it, place a box with the character's image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible`
    },
    {//================================3D=======================
        image: 'images/3d2-output.png',
        imageInput: 'images/3d2-input.png',
        title: 'Multi-View Result Generation',
        category: '3D',
        tags: ['3d'],
        prompt: `Generate the Front, Rear, Left, Right, Top, Bottom views on white. Evenly spaced. Consistent subject. Isometric Perspective Equivalence.`
    },
    {//================================3D=======================
        image: 'images/3d3-output.png',
        imageInput: 'images/3d3-input.png',
        title: 'Action Figure',
        category: '3D',
        tags: ['3d'],
        prompt: `make an action figure of me that says [“AI Evangelist - Kris”] and features [coffee, turtle, laptop, phone and headphones]`
    },
    {//================================3D=======================
        image: 'images/3d4-output.png',
        title: 'Control Character Face Shape',
        category: '3D',
        tags: ['3d'],
        prompt: `Design the character from Image 1 as a chibi version according to the face shape from Image 2`
    },
    {//================================3D=======================
        image: 'images/3d5-output.png',
        imageInput: 'images/3d5-input.png',
        title: 'LEGO Minifigure',
        category: '3D',
        tags: ['3d'],
        prompt: `Transform the person in the photo into a LEGO minifigure packaging box style, presented in isometric perspective. Label the box with the title "ZHOGUE". Inside the box, display the LEGO minifigure based on the person in the photo, along with their essential items (such as makeup, bags, or other items) as LEGO accessories. Beside the box, also display the actual LEGO minifigure itself, unpackaged, rendered in a realistic and vivid style.`
    },
    {//================================3D=======================
        image: 'images/3d6-output.png',
        imageInput: 'images/3d6-input.png',
        title: 'Gundam Model Figure',
        category: '3D',
        tags: ['3d'],
        prompt: `Transform the person in the photo into a Gundam model kit packaging box style, presented in isometric perspective. Label the box with the title "ZHOGUE". Inside the box, display a Gundam-style mechanical version of the person from the photo, along with their essentials (such as makeup, bags, or other items) redesigned as futuristic mechanical accessories. The packaging should resemble real Gunpla boxes, including technical illustrations, instruction manual-style details, and sci-fi fonts. Beside the box, also display the actual Gundam-style mechanical figure itself, outside the packaging, rendered in a realistic and lifelike style, similar to official Bandai promotional renders.`
    },
    {//================================3D=======================
        image: 'images/3d7-output.png',
        imageInput: 'images/3d7-input.png',
        title: 'Place Anime Statue in Real Life',
        category: '3D',
        tags: ['3d'],
        prompt: `A realistic photographic work. A gigantic statue of this person has been placed in a square in the center of Tokyo, with people looking up at it.`
    },
    {//================================3D=======================
        image: 'images/3d8-output.png',
        imageInput: 'images/3d8-input.png',
        title: 'Isometric Holographic Wireframe',
        category: '3D',
        tags: ['3d'],
        prompt: `Based on the uploaded image, convert it into a holographic depiction using wireframe lines only.`
    },
    {//================================3D=======================
        image: 'images/3d9-output.png',
        imageInput: 'images/3d9-input.png',
        title: 'Minecraft-Style Scene Generation',
        category: '3D',
        tags: ['3d'],
        prompt: `Using this location, create an isometric HD-2D Minecraft-style image of the landmark (buildings only).`
    },
    {//================================3D=======================
        image: 'images/3d10-output.png',
        title: 'Custom Marble Sculpture',
        category: '3D',
        tags: ['3d'],
        prompt: `A photorealistic image of an ultra-detailed sculpture of the subject in image made of shining marble. The sculpture should display smooth and reflective marble surface, emphasizing its luster and artistic craftsmanship. The design is elegant, highlighting the beauty and depth of marble. The lighting in the image should enhance the sculpture's contours and textures, creating a visually stunning and mesmerizing effect`
    },
    {//================================3D=======================
        image: 'images/3d11-output.png',
        title: 'Design a Chess Set',
        category: '3D',
        tags: ['3d'],
        prompt: `Draw a chessboard and a set of 3D-printable chess pieces inspired by this image.`
    },
    {//================================3D=======================
        image: 'images/3d12-output.png',
        title: 'Model Holographic Projection',
        category: '3D',
        tags: ['3d'],
        prompt: `Ultra-realistic product photo. Subject: virtual holographic character [CHARACTER], floating above a circular hologram projector Ø120 mm placed on a modern desk. Projection source rules: - If input reference is a 3D object → show a desktop 3D scanner beside the projector. Place the reference object on the scanner plate. The hologram above the projector is generated from this scanned object. - If input reference is a 2D image → show a modern PC with monitor on the desk. Display the reference image on the monitor screen. The hologram above the projector is generated from this screen content. Hologram rendering rules: - Character always appears as a semi-transparent volumetric image, background faintly visible through. - No beams, no particles, no solid statue surfaces. - Balanced anatomy (1/7–1/8 head-to-body ratio), correct proportions. - Natural pose with clear silhouette. - Hair, outfit folds, and accessories visible but translucent. - Face crisp and expressive, readable at 1000 px crop. - No copyrighted characters, no branded designs, no IP logos. Environment: modern desk with projector base + conditional device (scanner or monitor). Camera: 85–100 mm lens, 3/4 hero angle, eye-level, f/11–f/16, ISO100, tripod. Lighting: desk softly illuminated; holographic figure defined only by volumetric light. Background: seamless black studio with subtle reflections. Output: 4:5, 2048×2560. Negative: text-free, watermark-free, logo-free, brand-free, copyrighted characters, franchise IP, trademarked designs, resin, PVC, physical statue, opaque surfaces, toy gloss, beams, scanlines, dots, distortion, extra digits. Sampling: deterministic, seed=12345, temperature=0.`
    },
    {//================================3D=======================
        image: 'images/3d13-output.png',
        imageInput: 'images/3d13-input.png',
        title: 'Giant Figure Scaffolding',
        category: '3D',
        tags: ['3d'],
        prompt: `A hyper-realistic 3D render of the person in the image standing and taking a selfie. The giant figure is surrounded by massive scaffolding, with many tiny construction workers working on it. The scene is set in a city square, surrounded by modern buildings, moving vehicles (cars, buses), pedestrians, and a bright clear blue sky. The overall details are rich, presenting a photo-realistic texture with cinematic lighting effects.`
    },
    {//================================3D=======================
        image: 'images/3d14-output.png',
        imageInput: 'images/3d14-input.png',
        title: 'Component Extraction',
        category: '3D',
        tags: ['3d'],
        prompt: `Cut out each component and create a model sheet that retains the hologram.`
    },
    {//================================3D=======================
        image: 'images/3d15-output.png',
        imageInput: 'images/3d15-input.png',
        title: 'Isometric Conversion',
        category: '3D',
        tags: ['3d'],
        prompt: `Convert the image to isometric view`
    },
    {//================================3D=======================
        image: 'images/3d16-output.png',
        title: 'Miniature Store',
        category: '3D',
        tags: ['3d'],
        prompt: `Tiny diorama shop for [BRAND]. Roof made of oversized [PRODUCT], big [BRAND] logo sign above the window, vendor handing a [PRODUCT] to a customer, ground covered with many [PRODUCT]. Hand-made polymer-clay look, studio macro photo, soft light, shallow depth of field, vertical 3:4`
    },
    {//================================3D=======================
        image: 'images/3d17-output.png',
        imageInput: 'images/3d17-input.png',
        title: 'Custom Theme Park',
        category: '3D',
        tags: ['3d'],
        prompt: `Generates a photorealistic theme park image based on the original image. The theme park and the people enjoying it are depicted in an extremely photorealistic style. Daytime. Sunny. The color scheme and design are extracted from the original image and applied to the color scheme and design of various facilities. Vehicles and buildings based on the original image, mascot costumes that are a distorted version of the original image, and signs with the original image printed on them are placed within the image. The mascot costume design should use the original image as a motif, but be moderately distorted to create a photorealistic look. The sizes of the people and mascot costumes must not be unrealistic. Even if the original image is anime-style, the final image must be a photorealistic theme park. Be sure to follow these rules.`
    },
    {//================================Anime=======================
        image: 'images/anime1-output.png',
        imageInput: 'images/anime1-input.png',
        title: 'Hand Drawing Controls Multi-Character Poses',
        category: 'Anime',
        tags: ['anime'],
        prompt: `Have these two characters fight using the pose from Figure 3. Add appropriate visual backgrounds and scene interactions,Generated image ratio is 16:9`
    },
    {//================================Anime=======================
        image: 'images/anime2-output.png',
        imageInput: 'images/anime2-input.png',
        title: 'Anime to Real Coser',
        category: 'Anime',
        tags: ['anime'],
        prompt: `Generate a photo of a girl cosplaying this illustration, with the background set at Comiket`
    },
    {//================================Anime=======================
        image: 'images/anime3-output.png',
        imageInput: 'images/anime3-input.png',
        title: 'Pirate Wanted Poster',
        category: 'Anime',
        tags: ['anime'],
        prompt: `Using the original image, recreate a pirate's wanted poster drawn on parchment. Brown monochrome, with the texture of aged parchment. Retain the style and character design of the original image down to the smallest detail, and paste it large at the top of the wanted poster. A close-up of the face. Have the character wear a pirate hat. Write the bounty amount at the bottom of the poster. The bounty amount will be random, and a fictitious currency unit will be used. Below the bounty amount, write the crime in small letters. Use a fictitious language. English or Chinese characters may not be used.`
    },
    {//================================Anime=======================
        image: 'images/anime4-output.png',
        imageInput: 'images/anime4-input.png',
        title: 'Comic Convention Booth',
        category: 'Anime',
        tags: ['anime'],
        prompt: `Erase the background and replace the characters with the following: Cosplayers and Character Goods Character/Motif: Character goods based on the illustration Hairstyle, Eyes, and Appearance: (Focus on merchandise, not the character itself.) Main Character: A cosplayer is holding a figurine in the center of the screen. Location: Comic Market (a doujinshi sales event). A spacious booth is filled with merchandise lined up on tables and shelves. The atmosphere is filled with excitement and anticipation. Merchandise Lineup: • A large, approximately 100cm figure is displayed in the center of the booth, creating an eye-catching display. • The character is displayed on an 80-inch LCD panel. • Acrylic Stands • Chibi Figures (Deformed) • Body Pillows (Large, Full-Length Character Print) • Jigsaw Puzzles (Using Character Artwork) • Stationery (Notebooks, Pens, Clear Files, etc.) • Desk Pads • Plush Toys (Deformed) Exhibition/Display: • Goods neatly arranged throughout the booth, creating a unified look. • Utilizing desks and shelves reminiscent of doujinshi sales events, the layout encourages fans to pick up items. • With the energy of the visitors as a backdrop, the venue is presented as a special "fan sanctuary." Overall Tone: A dreamlike sales space. While emphasizing cuteness and pop, the space evokes the unique enthusiasm of doujin events and the feeling of a "sanctuary for fan activities." Swarms of people. Image Quality: Photorealistic, 4K (4000px x 3000px)`
    },
    {//================================Anime=======================
        image: 'images/anime5-output.png',
        imageInput: 'images/anime5-input.png',
        title: 'Become a Vtuber',
        category: 'Anime',
        tags: ['anime'],
        prompt: `Create a fictional Vtuber and their streaming screen using the original image. The Vtuber's hairstyle and clothing will be faithfully reproduced from the original image. The Vtuber image will be 2.5D-like, so it is not necessary to perfectly reproduce the style of the original image. A moderate sense of three-dimensionality is also necessary. The Vtuber's facial expression and pose may be changed from the original image. Have the Vtuber hold a game controller. Place only the Vtuber's upper body in the bottom right of the screen. Place the streaming screen of the game being played in the center of the screen. Place the chat screen on the left side of the screen. The screen ratio is set to a larger size for the game screen, and the upper half of the Vtuber's body is displayed smaller. The background of the original image is completely ignored, as well as the original image pose. Add a fictional streaming platform and browser UI to the top and bottom of the screen. The aspect ratio of the generated image is independent of that of the original image.`
    },
    {//================================Anime=======================
        image: 'images/anime7-output.png',
        imageInput: 'images/anime7-input.png',
        title: 'RPG Character Status UI',
        category: 'Anime',
        tags: ['anime'],
        prompt: `Use the character in the original image to create a character status screen for an RPG game. Keep the character design and style from the original image, but change the costume to one from a fantasy RPG. Also, change the pose to suit the situation. Display the character from the original image and the status screen side by side. The status screen will list various parameters, skills, icons, etc. The background should be a fantasy background that matches the style of the original image. The status screen should be rich and stylish, like a game from 2025.`
    },
    {//================================Anime=======================
        image: 'images/anime8-output.png',
        imageInput: 'images/anime8-input.png',
        title: 'Drawing on a Pen Display',
        category: 'Anime',
        tags: ['anime'],
        prompt: `Photorealistic pen tablet screen. Realistic first-person hand holding the pen tablet and pen. The original image is reproduced on the pen tablet in an unfinished state. The line art has been extracted from the original image. Portions of the line art have been colored with the same coloring as the original image. Unfinished coloring. Must not be monochrome. About 70% of the coloring is done. Close-up. The pen tip is touching the tablet screen.`
    },
    {//================================Building=======================
        image: 'images/building1-output.png',
        imageInput: 'images/building1-input.png',
        title: 'Extract 3d Building',
        category: 'Building',
        tags: ['building'],
        prompt: `Make Image Daytime and Isometric [Building Only]`
    },
    {//================================Building=======================
        image: 'images/building2-output.png',
        imageInput: 'images/building2-input.png',
        title: 'Generate Ground View from Map Arrow',
        category: 'Building',
        tags: ['building'],
        prompt: `draw what the red arrow sees / draw the real world view from the red circle in the direction of the arrow.`
    },
    {//================================Building=======================
        image: 'images/building3-output.png',
        title: 'Real World AR Information',
        category: 'Building',
        tags: ['building'],
        prompt: `you are a location-based AR experience generator. highlight [point of interest] in this image and annotate relevant information about it.`
    },
    {//===============================Building=======================
        image: 'images/building4-output.png',
        imageInput: 'images/building4-input.png',
        title: 'Map to Isometric',
        category: 'Building',
        tags: ['building'],
        prompt: `Take this location and make the landmark an isometric image (building only), in the stvle of the game Theme Park`
    },
    {//================================Building=======================
        image: 'images/building5-output.png',
        imageInput: 'images/building5-input.png',
        title: 'Floor Plan 3D Render',
        category: 'Building',
        tags: ['building'],
        prompt: `Convert this residential floor plan into an isometric, photo-realistic 3D rendering of the house.`
    },
    {//================================Building=======================
        image: 'images/building6-output.png',
        imageInput: 'images/building6-input.png',
        title: 'Scene A6 Folding Card',
        category: 'Building',
        tags: ['building'],
        prompt: `Draw an A6 folding card: when opened, it reveals a complete 3D spherical tiny house with a miniature paper garden and a bonsai tree inside.`
    },
    {//================================Building=======================
        image: 'images/building7-output.png',
        title: 'Split Scene Photo',
        category: 'Building',
        tags: ['building'],
        prompt: `A photo of a bedroom split down the middle: the left side is 2018 and the right side is 1964, in the same room.`
    },
    {//================================Building=======================
        image: 'images/building8-output.png',
        imageInput: 'images/building8-input.png',
        title: 'Building Extraction from Remote Sensing Image',
        category: 'Building',
        tags: ['building'],
        prompt: `Remove everything in the image except the buildings.`
    },
    {//================================Building=======================
        image: 'images/building9-output.png',
        title: 'Contemporary Art Exhibition Space',
        category: 'Building',
        tags: ['building'],
        prompt: `An avant-garde contemporary art exhibition space themed around the reference image. The entire exhibition hall (20.0 m x 20.0 m x 8.0 m) integrates architecture, lighting, flooring, walls, and ceiling into the artistic expression. At the far end of the hall stands a massive wall 20 meters wide and 8 meters high. In the center of this wall, the theme from the reference image is presented in a monumental artistic form. The image is vivid and three-dimensional, rising toward the viewer, becoming the focal point of the entire space. A system-generated exhibition title plaque is installed below the central wall. The title must be abstract, symbolic, and poetic, and must reflect a contemporary artwork. No price display is provided. The floor is polished granite with a reflectance of 0.35–0.40. Patterns and light derived from the reference image cascade across the surface of the work, resonating with the entire space as if responding to the footsteps of visitors. Tactile paving bricks are in a similar color, seamlessly integrated, but only 5 mm high, providing a clear texture. The work extends in a straight line from the entrance to the wall, creating a pause point before the artwork. After viewing, visitors are naturally guided to an opening on the right side (3 m wide x 3 m high). In emergencies, floor-level emergency lighting ensures illumination of 1 lux. The left and right walls and the ceiling each reinterpret an abstract element from the reference image, transforming the entire space into a single artwork. The flow of color, form, and light unifies the experience into an artistic whole. Visitor capacity is limited to 8–25 people. All visitors face the large wall, moving in a straight line and pausing at the designated point. No one looks back toward the entrance. Only one staff member is stationed near the right-side entrance beside the wall. All faces are blurred to ensure anonymity. The composition is stable, with the central vanishing point always aligned with the center of the wall. Verticality is within ±0.5°. Floor reflections are precise, human figures appear natural. Hands always show five fingers, eyes are symmetrical within a 3% margin. Fabrics remain flat with no deformation. Forbidden content: Elements unrelated to the reference image, missing or broken tactile paving, visitors facing the entrance, logos or watermarks, overcrowding, toy-like gloss, 2D flat projections, neon glow, teal-orange tones, oversaturation, perspective collapse, mismatched reflections, anatomical anomalies, extra limbs, distorted faces, excessive outlines, banding, or vignetting. DoD: The entire venue will be a contemporary artwork centered on the theme of the reference image, with the innermost structure forming a unified experience. The tactile paving synchronizes perfectly with the flow of light, creating a clear pause point. Visitors are immersed in the space itself, and even in reproduction, SSIM will remain stable at 0.95 or above.`
    },
	{ //================================Character Design=======================
	image: 'images/characterdesign1-output.png', 
	imageInput:'images/characterdesign1-input.png',
	title: 'Generate Character Design',
	category: 'Character Design', 
	tags: ['character design'], 
	prompt:`Generate character design for me (Character Design)
			Proportion design (different height comparisons, head-to-body ratio, etc.)
			Three views (front, side, back)
			Expression design (Expression Sheet) → like the image you sent
			Pose design (Pose Sheet) → various common poses
			Costume design (Costume Design)`
	},
	{ //================================Character Design=======================
	image: 'images/characterdesign2-output.png', 
	imageInput:'images/characterdesign2-input.png',
	title: 'Color Line Art with Color Palette',
	category: 'Character Design', 
	tags: ['character design'], 
	prompt:`Accurately use the color palette from Figure 2 to color the character in Figure 1`
	},
	{ //================================Character Design=======================
	image: 'images/characterdesign3-output.png', 
	title: 'Character Change Expression',
	category: 'Character Design', 
	tags: ['character design'], 
	prompt:`Character reference from Image 1 / Change to the expression from Image 2`
	},
	{ //================================Character Design=======================
	image: 'images/characterdesign4-output.png', 
	title: 'Illustration Drawing Process Four-Panel',
	category: 'Character Design', 
	tags: ['character design'], 
	prompt:`Generate a four-panel drawing process for the character: Step 1: Line art, Step 2: Flat colors, Step 3: Add shadows, Step 4: Refine and complete. No text.`
	},
	{ //================================Character Design=======================
	image: 'images/characterdesign5-output.png',
	title: 'Generate Character Design',
	category: 'Character Design', 
	tags: ['character design'], 
	prompt:`Please create a pose sheet for this illustration, making various poses!`
	},
	{ //================================Character Design=======================
	image: 'images/characterdesign6-output.png',
	title: 'Dark Gothic Tarot Card',
	category: 'Character Design', 
	tags: ['character design'], 
	prompt:`Generate a dark gothic tarot card featuring me from this image. Include [“AI Artist - Shira”] and [coffee, white fluffy chubby cat with pink bow, laptop, phone, headphones] as symbols, with moody shadows, intricate gothic borders, and mystical dark fantasy vibes.`
	},
	{ //================================Character Design=======================
	image: 'images/characterdesign7-output.png', 
	imageInput:'images/characterdesign7-input.png',
	title: 'Character Sheet Expressions',
	category: 'Character Design', 
	tags: ['character design'], 
	prompt:`Character sheet, facial expressions, joy, anger, sadness, happiness`
	},
	{ //================================Comic=======================
	image: 'images/comic1-output.png', 
	imageInput:'images/comic1-input.png',
	title: 'Create Comic Book',
	category: 'Comic', 
	tags: ['comic'], 
	prompt:`Based on the uploaded image, make a comic book strip, add text, write a compelling story. I want a superhero comic book.`
	},
	{ //================================Comic=======================
	image: 'images/comic2-output.png', 
	imageInput:'images/comic2-input.png',
	title: 'Manga Composition',
	category: 'Comic', 
	tags: ['comic'], 
	prompt:``
	},
	{ //================================Comic=======================
	image: 'images/comic3-output.png', 
	imageInput:'images/comic3-input.png',
	title: 'Manga Style Conversion',
	category: 'Comic', 
	tags: ['comic'], 
	prompt:`Convert the input photo into a black-and-white manga-style line drawing.`
	},
	{ //================================Comic=======================
	image: 'images/comic4-output.png', 
	imageInput:'images/comic4-input.png',
	title: 'Line Art to Doodle Drawing',
	category: 'Comic', 
	tags: ['comic'], 
	prompt:`Make the uploaded picture book look as if it was drawn by a five-year-old child.`
	},
	{ //================================Cute=======================
	image: 'images/cute1-output.png', 
	imageInput:'images/cute1-input.png',
	title: 'Custom Claw Machine',
	category: 'Cute', 
	tags: ['cute', 'animal'],
	prompt:`Generate an image showing this animal as a simplified and deformed as an anime-like plush toy (made of short-pile, soft-touch polyester knit fabric), with multiple units inside a UFO catcher machine. On either side are additional UFO Catcher machines containing multiple plush toys of different animals, distinct from the main image. The setting is a Japanese game center, with an overall very bright impression. Only the top section of the UFO catcher is painted in vibrant colors. The lower section is painted white. The background is a wall, and the area behind the UFO catcher is quite blurred.　The floor is carpeted. The shooting angle is from the front. Most importantly, absolutely no text or logos should appear in the output.`
	},
	{ //================================Industry=======================
	image: 'images/industry1-output.png', 
	imageInput:'images/industry1-input.png',
	title: 'Movie Storyboard',
	category: 'Industry', 
	tags: ['industry'], 
	prompt:`Create an addictively intriguing 12 part story with 12 images with these two characters in a classic black and white film noir detective story. Make it about missing treasure that they get clues for throughout and then finally discover. The story is thrilling throughout with emotional highs and lows and ending on a great twist and high note. Do not include any words or text on the images but tell the story purely through the imagery itself.`
	},
	{ //================================Sticker=======================
	image: 'images/sticker1-output.png', 
	imageInput:'images/sticker1-input.png',
	title: 'Custom Character Stickers',
	category: 'Sticker', 
	tags: ['sticker'], 
	prompt:`Help me turn the character into a white outline sticker similar to Figure 2. The character needs to be transformed into a web illustration style, and add a playful white outline short phrase describing Figure 1.`
	},
	{ //================================Sticker=======================
	image: 'images/sticker2-output.png', 
	imageInput:'images/sticker2-input.png',
	title: 'Custom Character Stickers',
	category: 'Sticker', 
	tags: ['sticker'], 
	prompt:`Using the character from Image 2, generate [x] emoji stickers based on various poses from Image 1.`
	},
	{ //================================Fashion=======================
	image: 'images/fashion1-output.png', 
	imageInput:'images/fashion1-input.png',
	title: 'Fashion Moodboard Collage',
	category: 'Fashion', 
	tags: ['fashion'], 
	prompt:`A fashion mood board collage. Surround a portrait with cutouts of the individual items the model is wearing. Add handwritten notes and sketches in a playful, marker-style font, and include the brand name and source of each item in English. The overall aesthetic should be creative and cute.`
	},
	{ //================================Food=======================
	image: 'images/food1-output.png', 
	imageInput:'images/food1-input.png',
	title: 'Cook Based on Ingredients',
	category: 'Food', 
	tags: ['food'], 
	prompt:`make me a delicious lunch with these ingredients, and put it on a plate , zoomed in view of the plate, remove the other plates and ingredients.`
	},
	{ //================================Food=======================
	image: 'images/food2-output.png', 
	title: 'Explosive Food',
	category: 'Food', 
	tags: ['food'], 
	prompt:`Photograph this product in a dramatic modern scene accompanied by explosive outward dynamic arrangement of the key ingredients fresh and raw flying around the product signifying its freshness and nutritional value. promo ad shot, without text, product is emphasized, with the key brand colors as background.`
	},
	{ //================================Food=======================
	image: 'images/food3-output.png',
	title: 'Food Calorie Annotation',
	category: 'Food', 
	tags: ['food'], 
	prompt:`annotate this meal with names of food and calorie density and approximate calories`
	},
	{ //================================Food=======================
	image: 'images/food4-output.png', 
	imageInput:'images/food4-input.png',
	title: 'Remove Burger Ingredients',
	category: 'Food', 
	tags: ['food'], 
	prompt:`Remove all the ingredients from the burger and keep only the top and bottom buns. Leave a gap between them, keeping the same spacing as if the fillings were still inside.`
	},
	{ //================================Food=======================
	image: 'images/food5-output.png', 
	imageInput:'images/food5-input.png',
	title: 'Restore Partially Eaten Food',
	category: 'Food', 
	tags: ['food'], 
	prompt:`Restore this half-eaten [XX] back to its original uneaten state.`
	},
	{ //================================Hair=======================
	image: 'images/hair1-output.png', 
	title: 'Change Multiple Hairstyles',
	category: 'Hair', 
	tags: ['hair'], 
	prompt:`Generate avatars of this person with different hairstyles in a 3x3 grid format`
	},
	{ //================================Profile=======================
	image: 'images/profile1-output.png', 
	imageInput:'images/profile1-input.png',
	title: 'ID Photo',
	category: 'Profile', 
	tags: ['profile'], 
	prompt:`Crop the head and create a 2-inch ID photo with:
		  1. Blue background
		  2. Professional business attire
		  3. Frontal face
		  4. Slight smile`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit1-output.png', 
	imageInput:'images/autoedit1-input.png',
	title: 'BELUM',
	category: 'Auto Edit', 
	tags: ['auto edit', 'enchant','colorize'], 
	prompt:`restore and colorize this photo.`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit2-output.png', 
	imageInput:'images/autoedit2-input.png',
	title: 'Photos of Yourself in Different Eras',
	category: 'Auto Edit', 
	tags: ['auto edit',], 
	prompt:`Change the characer's style to [1970]'s classical [male] style
			Add [long curly] hair, 
			[long mustache], 
			change the background to the iconic [californian summer landscape]
			Don't change the character's face`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit3-output.png', 
	imageInput:'images/autoedit3-input.png',
	title: 'Multi-Reference Image Generation',
	category: 'Auto Edit', 
	tags: ['auto edit'], 
	prompt:`A model is posing and leaning against a pink bmw. She is wearing the following items, the scene is against a light grey background. The green alien is a keychain and it's attached to the pink handbag. The model also has a pink parrot on her shoulder. There is a pug sitting next to her wearing a pink collar and gold headphones.`
	},
	{ //================================Nature=======================
	image: 'images/nature1-output.png', 
	imageInput:'images/nature1-input.png',
	title: 'Automatic Photo Editing',
	category: 'Nature', 
	tags: ['nature'], 
	prompt:`This photo is very boring and plain. Enhance it! Increase the contrast, boost the colors, and improve the lighting to make it richer,You can crop and delete details that affect the composition.`
	},
	{ //================================Fashion=======================
	image: 'images/fashion2-output.png', 
	imageInput:'images/fashion2-input.png',
	title: 'OOTD Outfit',
	category: 'Fashion', 
	tags: ['fashion'], 
	prompt:`Choose the person in Image 1 and dress them in all the clothing and accessories from Image 2. Shoot a series of realistic OOTD-style photos outdoors, using natural lighting, a stylish street style, and clear full-body shots. Keep the person's identity and pose from Image 1, but show the complete outfit and accessories from Image 2 in a cohesive, stylish way.`
	},
	{ //================================Fashion=======================
	image: 'images/fashion3-output.png', 
	imageInput:'images/fashion3-input.png',
	title: 'Character Clothing Change',
	category: 'Fashion', 
	tags: ['fashion'], 
	prompt:`Replace the person's clothing in the input image with the target clothing shown in the reference image. Keep the person's pose, facial expression, background, and overall realism unchanged. Make the new outfit look natural, well-fitted, and consistent with lighting and shadows. Do not alter the person's identity or the environment — only change the clothes.`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit7-output.png', 
	imageInput:'images/autoedit7-input.png',
	title: 'Character Pose Modification',
	category: 'Auto Edit', 
	tags: ['auto edit'],
	prompt:`Have the person in the picture look straight ahead`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit8-output.png', 
	imageInput:'images/autoedit8-input.png',
	title: 'Character Pose Modification',
	category: 'Auto Edit', 
	tags: ['auto edit'],
	prompt:`Change the pose of the person in Figure 1 to that of Figure 2, and shoot in a professional studio`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit9-output.png', 
	title: 'Virtual Makeup Try-On',
	category: 'Auto Edit', 
	tags: ['auto edit'],
	prompt:`Apply the makeup from Image 2 to the character in Image 1, while maintaining the pose from Image 1.`
	},
	{ //================================Filter=======================
	image: 'images/filter1-output.png', 
	title: 'Overlay Filter/Material',
	category: 'Filter', 
	tags: ['filter'], 
	prompt:`Overlay the [glass] effect from Image 2 onto the photo in Image 1`
	},
	{ //================================Lighting=======================
	image: 'images/lighting1-output.png', 
	title: 'Lighting Control',
	category: 'Lighting', 
	tags: ['lighting'], 
	prompt:`Change the character from Image 1 to the lighting from Image 2, with dark areas as shadows`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit13-output.png', 
	imageInput:'images/autoedit13-input.png',
	title: 'Extract Subject to Transparent Layer',
	category: 'Auto Edit', 
	tags: ['auto edit'],
	prompt:`extract the [samurai] and put transparent background`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit14-output.png', 
	imageInput:'images/autoedit14-input.png',
	title: 'Image Outpainting Repair',
	category: 'Auto Edit', 
	tags: ['auto edit'],
	prompt:`Repair the checkerboard (transparent) parts of the image and restore a complete, coherent photo.`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit15-output.png', 
	imageInput:'images/autoedit15-input.png',
	title: 'Reset Camera Parameters',
	category: 'Auto Edit', 
	tags: ['auto edit'],
	prompt:`RAW-ISO [100] - [F2.8-1/200 24mm] settings`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit16-output.png', 
	imageInput:'images/autoedit16-input.png',
	title: 'High-Resolution Image Restoration',
	category: 'Auto Edit', 
	tags: ['auto edit'],
	prompt:`Enhance the resolution of this old image and add the appropriate texture details, reinterpreting it with modern anime techniques.`
	},
	{//================================Auto Edit=======================
        image: 'images/autoedit17-output.png',
        imageInput: 'images/autoedit17-input.png',
        title: 'Fisheye Peephole Illustration',
        category: 'Auto Edit',
        tags: ['auto edit', 'filter', 'camera lens', 'casual',],
        prompt: `ultra-detailed anime illustration, fisheye lens peephole perspective, circular distorted view as if looking through a door peephole, warped wide-angle effect with curved edges, darkened vignette around the circular frame, two people leaning their faces close to the peephole trying to peek through, both with mischievous playful smiles, exaggerated perspective distortion making their features appear larger and curved, faces approaching the peephole lens, hallway or room interior bent by the lens effect, slightly blurry edges mimicking actual peephole optics, playful atmosphere, 8k resolution`
    },
	{ //================================Building=======================
	image: 'images/building10-output.png', 
	title: 'Architectural drawings to models/modeling',
	category: 'Building', 
	tags: ['building'], 
	prompt:`convert this photo into a architecture model. Behind the model, there should be a cardboard box with an image of the architecture from the photo on it. There should also be a computer, with the content on the computer screen showing the Blender modeling process of the figurine. In front of the cardboard box, place a cardstock and put the architecture model from the photo I provided on it. I hope the PVC material can be clearly presented. It would be even better if the background is indoors.`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit18-output.png',
	title: 'Continuous editing + object combination + background design',
	category: 'Auto Edit', 
	tags: ['auto edit'], 
	prompt:`The person in Figure 1 is carrying a messenger bag with the logo in Figure 2`
	},
	{ //================================Auto Edit=======================
	image: 'images/autoedit19-output.png',
	title: 'HD fix',
	category: 'Auto Edit', 
	tags: ['auto edit'], 
	prompt:`Enhance this image to high resolution`
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
];