// src/data/curriculum.js
export const curriculum = {
    title: "AI Image Generation Mastery",
    description: "Complete learning path from Python basics to advanced Stable Diffusion with ControlNet and identity preservation",
    totalDuration: "14 Weeks",
    difficulty: "Beginner to Advanced",
    phases: [
        {
            id: 1,
            title: "Foundations & Text-to-Image Generation",
            duration: "Weeks 1-4",
            goal: "Solid Python, Deep Learning basics, and hands-on with basic Stable Diffusion",
            color: "blue",
            icon: "code",
            weeks: [
                {
                    id: 1,
                    title: "Python & Deep Learning Fundamentals",
                    description: "Build programming foundation and understand neural networks",
                    days: [
                        {
                            id: 1,
                            title: "Python Refresh/Fundamentals",
                            description: "Data types, control flow, functions, classes, modules, virtual environments",
                            duration: "6-8 hours",
                            difficulty: "Beginner",
                            topics: [
                                "Data types and control flow",
                                "Functions and classes",
                                "Modules and virtual environments",
                                "Object-oriented programming basics"
                            ],
                            practice: "Write scripts for basic data manipulation, simple object-oriented programs",
                            project: "Simple calculator or a basic text-based adventure game",
                            resources: [
                                {
                                    title: "Python Official Tutorial",
                                    url: "https://docs.python.org/3/tutorial/",
                                    type: "documentation",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Python for Beginners - Microsoft",
                                    url: "https://docs.microsoft.com/en-us/learn/paths/python-first-steps/",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "Virtual Environments Explained",
                                    url: "https://realpython.com/python-virtual-environments-a-primer/",
                                    type: "article",
                                    duration: "30 minutes"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Python Refresh/Fundamentals - Day 2",
                            description: "Advanced Python concepts and OOP practice",
                            duration: "6-8 hours",
                            difficulty: "Beginner",
                            topics: [
                                "Classes and inheritance",
                                "Exception handling",
                                "File I/O operations",
                                "List comprehensions"
                            ],
                            practice: "Build a more complex OOP project",
                            project: "Text-based adventure game with classes",
                            resources: [
                                {
                                    title: "Python OOP Tutorial",
                                    url: "https://realpython.com/python3-object-oriented-programming/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Python Exception Handling",
                                    url: "https://docs.python.org/3/tutorial/errors.html",
                                    type: "documentation",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "NumPy & Pandas Basics",
                            description: "Essential data manipulation libraries for AI",
                            duration: "6-8 hours",
                            difficulty: "Beginner",
                            topics: [
                                "Array operations and broadcasting",
                                "DataFrame manipulation",
                                "Data loading and analysis"
                            ],
                            practice: "Work with sample datasets (Iris, Titanic) for analysis",
                            project: "Read a CSV, perform aggregations, and save results",
                            resources: [
                                {
                                    title: "NumPy Quickstart Tutorial",
                                    url: "https://numpy.org/doc/stable/user/quickstart.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Pandas Getting Started",
                                    url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "NumPy & Pandas Basics - Day 2",
                            description: "Advanced data manipulation techniques",
                            duration: "6-8 hours",
                            difficulty: "Beginner",
                            topics: [
                                "Advanced indexing",
                                "Data cleaning",
                                "Data visualization basics"
                            ],
                            practice: "Data cleaning and visualization exercises",
                            project: "Complete data analysis pipeline",
                            resources: [
                                {
                                    title: "Pandas Data Cleaning",
                                    url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/06_calculate_statistics.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Deep Learning Concepts (Theory)",
                            description: "Understanding neural networks and training process",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Neural networks architecture",
                                "Forward and backpropagation",
                                "Gradient descent and optimization",
                                "Loss functions and overfitting"
                            ],
                            practice: "Watch introductory videos, read articles",
                            project: "No coding project yet, focus on understanding",
                            resources: [
                                {
                                    title: "3Blue1Brown Neural Networks",
                                    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
                                    type: "video",
                                    duration: "4 hours"
                                },
                                {
                                    title: "Stanford CS231n Course",
                                    url: "http://cs231n.stanford.edu/",
                                    type: "course",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Understanding Backpropagation",
                                    url: "https://towardsdatascience.com/understanding-backpropagation-algorithm-7bb3aa2f95fd",
                                    type: "article",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Deep Learning Concepts - Day 2",
                            description: "Advanced concepts and practical considerations",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Activation functions",
                                "Regularization techniques",
                                "Batch normalization",
                                "Optimization algorithms"
                            ],
                            practice: "Study different optimization methods",
                            project: "Theoretical understanding of training dynamics",
                            resources: [
                                {
                                    title: "Activation Functions Guide",
                                    url: "https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6",
                                    type: "article",
                                    duration: "1 hour"
                                },
                                {
                                    title: "Optimization Algorithms",
                                    url: "https://ruder.io/optimizing-gradient-descent/",
                                    type: "article",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & Catch-up",
                            description: "Consolidate learning and practice",
                            duration: "4-6 hours",
                            difficulty: "Beginner",
                            topics: [
                                "Python fundamentals review",
                                "NumPy and Pandas practice",
                                "Deep learning theory revision"
                            ],
                            practice: "Practice more Python/NumPy/Pandas exercises",
                            project: "Solidify DL theory understanding",
                            resources: [
                                {
                                    title: "Python Practice Exercises",
                                    url: "https://www.w3resource.com/python-exercises/",
                                    type: "practice",
                                    duration: "3 hours"
                                },
                                {
                                    title: "NumPy Exercises",
                                    url: "https://www.machinelearningplus.com/python/101-numpy-exercises-python/",
                                    type: "practice",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    title: "PyTorch Fundamentals",
                    description: "Hands-on with PyTorch for deep learning",
                    days: [
                        {
                            id: 1,
                            title: "PyTorch Tensors & Autograd",
                            description: "Learn tensor operations and automatic differentiation",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Tensor creation and operations",
                                "GPU/CPU device management",
                                "Automatic differentiation with autograd"
                            ],
                            practice: "Reimplement NumPy operations using PyTorch tensors",
                            project: "Implement linear regression from scratch",
                            resources: [
                                {
                                    title: "PyTorch Tensors Tutorial",
                                    url: "https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Autograd Mechanics",
                                    url: "https://pytorch.org/docs/stable/notes/autograd.html",
                                    type: "documentation",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "PyTorch Tensors & Autograd - Day 2",
                            description: "Advanced tensor operations and gradient computation",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Advanced tensor operations",
                                "Gradient computation patterns",
                                "Memory optimization"
                            ],
                            practice: "Calculate gradients for complex functions",
                            project: "Implement custom gradient functions",
                            resources: [
                                {
                                    title: "PyTorch Autograd Tutorial",
                                    url: "https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Building Neural Networks with torch.nn",
                            description: "Create neural networks using PyTorch's nn module",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "torch.nn.Module basics",
                                "Linear layers and activation functions",
                                "Sequential models and DataLoaders"
                            ],
                            practice: "Build MLP for classification on toy datasets",
                            project: "Train an MLP on MNIST/FashionMNIST",
                            resources: [
                                {
                                    title: "PyTorch Neural Networks Tutorial",
                                    url: "https://pytorch.org/tutorials/beginner/blitz/neural_networks_tutorial.html",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "PyTorch Datasets and DataLoaders",
                                    url: "https://pytorch.org/tutorials/beginner/basics/data_tutorial.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Building Neural Networks - Day 2",
                            description: "Advanced model architectures and training",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Custom model architectures",
                                "Training loops and validation",
                                "Model saving and loading"
                            ],
                            practice: "Implement custom training loops",
                            project: "Complete MNIST training pipeline",
                            resources: [
                                {
                                    title: "PyTorch Training Loop Guide",
                                    url: "https://pytorch.org/tutorials/beginner/introyt/trainingyt.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Convolutional Neural Networks (CNNs)",
                            description: "Understand and implement CNNs for image processing",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Convolutional layers",
                                "Pooling operations",
                                "CNN architecture design"
                            ],
                            practice: "Modify MLP to CNN for image classification",
                            project: "Train a basic CNN on CIFAR-10",
                            resources: [
                                {
                                    title: "PyTorch CNN Tutorial",
                                    url: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "CNN Explainer",
                                    url: "https://poloclub.github.io/cnn-explainer/",
                                    type: "interactive",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "CNNs and Transfer Learning",
                            description: "Advanced CNN architectures and transfer learning",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Advanced CNN architectures",
                                "Transfer learning concepts",
                                "Fine-tuning pre-trained models"
                            ],
                            practice: "Implement transfer learning with ResNet",
                            project: "Fine-tune CNN on custom dataset",
                            resources: [
                                {
                                    title: "Transfer Learning Tutorial",
                                    url: "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & Experimentation",
                            description: "Experiment with models and hyperparameters",
                            duration: "4-6 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Hyperparameter tuning",
                                "Model experimentation",
                                "Performance analysis"
                            ],
                            practice: "Experiment with hyperparameters for your CNN",
                            project: "Try different activation functions and architectures",
                            resources: [
                                {
                                    title: "PyTorch Model Zoo",
                                    url: "https://pytorch.org/vision/stable/models.html",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Introduction to Transformers & Diffusion Models",
                    description: "Learn transformer architecture and diffusion model concepts",
                    days: [
                        {
                            id: 1,
                            title: "Transformers (Conceptual)",
                            description: "Understand attention mechanism and transformer architecture",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Attention mechanism",
                                "Self-attention",
                                "Encoder-decoder architecture"
                            ],
                            practice: "Read Attention Is All You Need paper",
                            project: "No coding project, focus on understanding attention",
                            resources: [
                                {
                                    title: "Attention Is All You Need Paper",
                                    url: "https://arxiv.org/abs/1706.03762",
                                    type: "paper",
                                    duration: "2 hours"
                                },
                                {
                                    title: "The Illustrated Transformer",
                                    url: "https://jalammar.github.io/illustrated-transformer/",
                                    type: "article",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Transformers - Day 2",
                            description: "Deep dive into transformer components",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Multi-head attention",
                                "Positional encoding",
                                "Transformer blocks"
                            ],
                            practice: "Watch transformer explanation videos",
                            project: "Theoretical understanding of sequence processing",
                            resources: [
                                {
                                    title: "Transformer Architecture Explained",
                                    url: "https://www.youtube.com/watch?v=TQQlZhbC5ps",
                                    type: "video",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Diffusion Models (Conceptual)",
                            description: "Understand diffusion model theory and process",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Forward diffusion process",
                                "Reverse diffusion process",
                                "UNet architecture"
                            ],
                            practice: "Watch diffusion model explainers",
                            project: "No coding project, focus on understanding diffusion",
                            resources: [
                                {
                                    title: "What are Diffusion Models?",
                                    url: "https://lilianweng.github.io/posts/2021-07-11-diffusion-models/",
                                    type: "article",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Diffusion Models Explained",
                                    url: "https://www.youtube.com/watch?v=HoKDTa5jHvg",
                                    type: "video",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Diffusion Models - Day 2",
                            description: "Advanced diffusion concepts and variations",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Conditional generation",
                                "Different sampling methods",
                                "Latent diffusion models"
                            ],
                            practice: "Study different diffusion model variants",
                            project: "Understand conditional vs unconditional generation",
                            resources: [
                                {
                                    title: "Denoising Diffusion Probabilistic Models",
                                    url: "https://arxiv.org/abs/2006.11239",
                                    type: "paper",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Hugging Face Ecosystem & Setup",
                            description: "Set up Hugging Face libraries and generate first images",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "HuggingFace Hub introduction",
                                "Transformers and diffusers libraries",
                                "Model loading and pipelines"
                            ],
                            practice: "Install diffusers and load text-to-image pipeline",
                            project: "Generate 5-10 images using basic text prompts",
                            resources: [
                                {
                                    title: "Hugging Face Diffusers",
                                    url: "https://huggingface.co/docs/diffusers/index",
                                    type: "documentation",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Getting Started with Diffusers",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/write_own_pipeline",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Hugging Face - Day 2",
                            description: "Advanced pipeline usage and GPU optimization",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "GPU setup verification",
                                "Pipeline optimization",
                                "Memory management"
                            ],
                            practice: "Experiment with different random seeds",
                            project: "Generate images with various seeds and compare results",
                            resources: [
                                {
                                    title: "Hugging Face GPU Guide",
                                    url: "https://huggingface.co/docs/transformers/perf_train_gpu_one",
                                    type: "documentation",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & Initial Stable Diffusion Fun",
                            description: "Practice and experiment with Stable Diffusion",
                            duration: "4-6 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Prompt experimentation",
                                "Model exploration",
                                "Output analysis"
                            ],
                            practice: "Play around with different prompts",
                            project: "Get comfortable with the diffusers pipeline",
                            resources: [
                                {
                                    title: "Stable Diffusion Prompt Guide",
                                    url: "https://stable-diffusion-art.com/prompt-guide/",
                                    type: "article",
                                    duration: "1 hour"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Deeper into Stable Diffusion & Prompt Engineering",
                    description: "Master Stable Diffusion parameters and prompt engineering",
                    days: [
                        {
                            id: 1,
                            title: "diffusers Pipeline Parameters",
                            description: "Learn to control image generation with parameters",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "guidance_scale (CFG scale)",
                                "num_inference_steps",
                                "Different schedulers"
                            ],
                            practice: "Experiment with varying parameters",
                            project: "Control output quality and style using parameters",
                            resources: [
                                {
                                    title: "Diffusers Pipeline Parameters",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/customize_inference",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Pipeline Parameters - Day 2",
                            description: "Advanced parameter tuning and negative prompts",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Negative prompts usage",
                                "Scheduler comparisons",
                                "Quality vs speed trade-offs"
                            ],
                            practice: "Use negative prompts to improve image quality",
                            project: "Optimize generation for specific use cases",
                            resources: [
                                {
                                    title: "Negative Prompt Guide",
                                    url: "https://stable-diffusion-art.com/how-to-use-negative-prompts/",
                                    type: "article",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Image-to-Image with Stable Diffusion",
                            description: "Learn img2img pipeline for image transformation",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "img2img pipeline",
                                "Strength parameter",
                                "Image variation generation"
                            ],
                            practice: "Take generated images and create variations with img2img",
                            project: "Transform simple sketch into detailed image",
                            resources: [
                                {
                                    title: "Img2Img Pipeline Guide",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/img2img",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Image-to-Image - Day 2",
                            description: "Advanced img2img techniques",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Advanced strength tuning",
                                "Multiple transformation passes",
                                "Style transfer applications"
                            ],
                            practice: "Create complex image transformations",
                            project: "Build image style transfer pipeline",
                            resources: [
                                {
                                    title: "Advanced Img2Img Techniques",
                                    url: "https://stable-diffusion-art.com/img2img/",
                                    type: "article",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Prompt Engineering Best Practices",
                            description: "Master the art of writing effective prompts",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Prompt structuring",
                                "Descriptive adjectives usage",
                                "Common pitfalls avoidance"
                            ],
                            practice: "Refine prompts for specific desired outputs",
                            project: "Create gallery of 10-15 images showcasing prompt engineering",
                            resources: [
                                {
                                    title: "Prompt Engineering Guide",
                                    url: "https://stable-diffusion-art.com/prompt-guide/",
                                    type: "article",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Awesome Prompt Engineering",
                                    url: "https://github.com/f/awesome-chatgpt-prompts",
                                    type: "resource",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Advanced Prompt Engineering",
                            description: "Advanced techniques for precise control",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Weighted prompts",
                                "Compositional prompts",
                                "Style and artist references"
                            ],
                            practice: "Achieve diverse styles and subjects with prompts",
                            project: "Master precise control over generated content",
                            resources: [
                                {
                                    title: "Advanced Prompt Techniques",
                                    url: "https://www.reddit.com/r/StableDiffusion/comments/zcp6u9/comprehensive_guide_to_prompt_engineering/",
                                    type: "article",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Project: Basic Text-to-Image Application",
                            description: "Build your first Stable Diffusion application",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Application development",
                                "User interface design",
                                "Model integration"
                            ],
                            practice: "Create Python script or Gradio app",
                            project: "Build app that takes text prompt and generates image",
                            resources: [
                                {
                                    title: "Gradio Quickstart",
                                    url: "https://www.gradio.app/guides/quickstart",
                                    type: "tutorial",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Building AI Apps with Gradio",
                                    url: "https://huggingface.co/docs/hub/spaces-gradio",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Introducing Control & Conditioning",
            duration: "Weeks 5-8",
            goal: "Master feature extraction for control and integrate ControlNet",
            color: "green",
            icon: "sliders",
            weeks: [
                {
                    id: 5,
                    title: "Image Preprocessing & Basic Feature Extraction",
                    description: "Learn OpenCV and feature extraction techniques",
                    days: [
                        {
                            id: 1,
                            title: "OpenCV Basics",
                            description: "Image manipulation and basic computer vision",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Loading/saving images",
                                "Resizing and cropping",
                                "Color conversions and filters"
                            ],
                            practice: "Use OpenCV to manipulate images from Stable Diffusion outputs",
                            project: "Script to resize, convert to grayscale, and apply blur",
                            resources: [
                                {
                                    title: "OpenCV Python Tutorials",
                                    url: "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "OpenCV Image Processing",
                                    url: "https://www.geeksforgeeks.org/opencv-python-tutorial/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "OpenCV Basics - Day 2",
                            description: "Advanced image processing techniques",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Morphological operations",
                                "Image filtering",
                                "Contour detection"
                            ],
                            practice: "Apply advanced OpenCV operations to images",
                            project: "Build image preprocessing pipeline",
                            resources: [
                                {
                                    title: "OpenCV Advanced Tutorials",
                                    url: "https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Canny Edge Detection & Depth Maps",
                            description: "Extract structural features from images",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Canny edge detection algorithm",
                                "Depth map generation",
                                "3D information representation"
                            ],
                            practice: "Use OpenCV Canny edge detection on various images",
                            project: "Apply Canny edge detection and visualize output",
                            resources: [
                                {
                                    title: "Canny Edge Detection Guide",
                                    url: "https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                },
                                {
                                    title: "MiDaS Depth Estimation",
                                    url: "https://github.com/isl-org/MiDaS",
                                    type: "documentation",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Feature Extraction - Day 2",
                            description: "Advanced feature extraction methods",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Advanced edge detection",
                                "Depth estimation models",
                                "Feature visualization"
                            ],
                            practice: "Generate pseudo depth maps using MiDaS",
                            project: "Create depth maps for various image types",
                            resources: [
                                {
                                    title: "Depth Estimation Tutorial",
                                    url: "https://huggingface.co/docs/transformers/tasks/monocular_depth_estimation",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Pose Estimation (MediaPipe Pose)",
                            description: "Extract human pose keypoints from images",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Pose estimation concepts",
                                "Keypoint detection",
                                "Real-time pose analysis"
                            ],
                            practice: "Install and use MediaPipe for pose detection",
                            project: "Detect pose landmarks and draw skeleton on images",
                            resources: [
                                {
                                    title: "MediaPipe Pose Guide",
                                    url: "https://google.github.io/mediapipe/solutions/pose.html",
                                    type: "documentation",
                                    duration: "2 hours"
                                },
                                {
                                    title: "MediaPipe Python Tutorial",
                                    url: "https://ai.googleblog.com/2021/08/on-device-real-time-body-pose-tracking.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Pose Estimation - Day 2",
                            description: "Advanced pose analysis and applications",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Multiple person pose detection",
                                "Pose normalization",
                                "Application development"
                            ],
                            practice: "Handle multiple people in pose detection",
                            project: "Build pose analysis application",
                            resources: [
                                {
                                    title: "Advanced MediaPipe",
                                    url: "https://github.com/google/mediapipe",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & Preparation for ControlNet",
                            description: "Prepare for ControlNet integration",
                            duration: "4-6 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Feature extraction review",
                                "ControlNet theory preparation",
                                "Pipeline integration planning"
                            ],
                            practice: "Ensure all feature extraction methods are working",
                            project: "Review how extracted features will control generation",
                            resources: [
                                {
                                    title: "ControlNet Paper",
                                    url: "https://arxiv.org/abs/2302.05543",
                                    type: "paper",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 6,
                    title: "ControlNet Integration (Basic Controls)",
                    description: "Integrate ControlNet for precise image control",
                    days: [
                        {
                            id: 1,
                            title: "ControlNet Theory & diffusers Integration",
                            description: "Understand ControlNet architecture and integration",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "ControlNet conditioning mechanism",
                                "Different ControlNet models",
                                "Diffusers integration patterns"
                            ],
                            practice: "Read ControlNet paper and explore diffusers documentation",
                            project: "No coding, focus on theory and setup",
                            resources: [
                                {
                                    title: "ControlNet Paper",
                                    url: "https://arxiv.org/abs/2302.05543",
                                    type: "paper",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Diffusers ControlNet Guide",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/controlnet",
                                    type: "documentation",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "ControlNet Theory - Day 2",
                            description: "Deep dive into ControlNet implementation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "ControlNet architecture details",
                                "Training process",
                                "Model variants comparison"
                            ],
                            practice: "Study different ControlNet model types",
                            project: "Understand conditioning mechanisms",
                            resources: [
                                {
                                    title: "ControlNet GitHub",
                                    url: "https://github.com/lllyasviel/ControlNet",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "ControlNet with Canny Edges",
                            description: "Use edge detection to control image generation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Canny ControlNet integration",
                                "Edge-based conditioning",
                                "Structure preservation"
                            ],
                            practice: "Combine Canny edge extraction with ControlNet pipeline",
                            project: "Transform image style while retaining structure",
                            resources: [
                                {
                                    title: "Canny ControlNet Example",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/controlnet#canny",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Canny ControlNet - Day 2",
                            description: "Advanced edge-based control techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Edge threshold optimization",
                                "Complex structure handling",
                                "Multi-subject control"
                            ],
                            practice: "Handle complex photos with detailed edges",
                            project: "Create artistic transformations with edge control",
                            resources: [
                                {
                                    title: "Advanced ControlNet Techniques",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/12",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "ControlNet with Pose Estimation",
                            description: "Use pose keypoints to control character generation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "OpenPose ControlNet integration",
                                "Pose-based conditioning",
                                "Character generation control"
                            ],
                            practice: "Extract pose and use with ControlNet pipeline",
                            project: "Generate characters in specific poses",
                            resources: [
                                {
                                    title: "Pose ControlNet Guide",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/controlnet#openpose",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Pose ControlNet - Day 2",
                            description: "Advanced pose control applications",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Multiple character poses",
                                "Pose interpolation",
                                "Animation preparation"
                            ],
                            practice: "Generate multiple characters with same pose",
                            project: "Create character variations with pose consistency",
                            resources: [
                                {
                                    title: "Multi-person Pose Control",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/123",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Project: Controlled Image Generation App",
                            description: "Build application with multiple control options",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Application architecture",
                                "Multiple control integration",
                                "User interface design"
                            ],
                            practice: "Expand Phase 1 project with control features",
                            project: "Build app with reference image and control type selection",
                            resources: [
                                {
                                    title: "Gradio Components Guide",
                                    url: "https://www.gradio.app/docs/components",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 7,
                    title: "Deeper ControlNet & Segmentation",
                    description: "Advanced ControlNet techniques and segmentation",
                    days: [
                        {
                            id: 1,
                            title: "ControlNet with Depth Maps",
                            description: "Use depth information for 3D-aware generation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Depth ControlNet integration",
                                "3D scene understanding",
                                "Spatial relationship preservation"
                            ],
                            practice: "Generate depth maps and use with ControlNet",
                            project: "Create new scenes while retaining depth structure",
                            resources: [
                                {
                                    title: "Depth ControlNet Tutorial",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/controlnet#depth",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Depth ControlNet - Day 2",
                            description: "Advanced depth-based applications",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Complex scene depth",
                                "Depth map refinement",
                                "3D style transfer"
                            ],
                            practice: "Handle complex scenes with detailed depth",
                            project: "Create architectural visualizations with depth control",
                            resources: [
                                {
                                    title: "Advanced Depth Techniques",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/88",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Semantic Segmentation",
                            description: "Understand and implement image segmentation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Segmentation concepts",
                                "Object detection pixel by pixel",
                                "Vision transformers for segmentation"
                            ],
                            practice: "Use pre-trained segmentation models",
                            project: "Segment objects in images and visualize masks",
                            resources: [
                                {
                                    title: "Segmentation Tutorial",
                                    url: "https://huggingface.co/docs/transformers/tasks/semantic_segmentation",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Segmentation - Day 2",
                            description: "Advanced segmentation techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Instance segmentation",
                                "Panoptic segmentation",
                                "Segmentation model training"
                            ],
                            practice: "Implement different segmentation types",
                            project: "Build comprehensive segmentation pipeline",
                            resources: [
                                {
                                    title: "Advanced Segmentation Guide",
                                    url: "https://github.com/facebookresearch/detectron2",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "ControlNet with Segmentation Maps",
                            description: "Use segmentation for precise object control",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Segmentation ControlNet integration",
                                "Object-level control",
                                "Regional conditioning"
                            ],
                            practice: "Experiment with segmentation as control input",
                            project: "Control specific areas in generated images",
                            resources: [
                                {
                                    title: "Segmentation ControlNet",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/144",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Advanced ControlNet Applications",
                            description: "Explore specialized ControlNet models",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Specialized ControlNet variants",
                                "Custom conditioning",
                                "Model combination techniques"
                            ],
                            practice: "Explore different ControlNet model types",
                            project: "Implement custom control applications",
                            resources: [
                                {
                                    title: "ControlNet Model Zoo",
                                    url: "https://huggingface.co/models?library=controlnet",
                                    type: "resource",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & Advanced ControlNet Exploration",
                            description: "Master ControlNet and explore advanced applications",
                            duration: "4-6 hours",
                            difficulty: "Advanced",
                            topics: [
                                "ControlNet type review",
                                "Advanced applications",
                                "Custom training exploration"
                            ],
                            practice: "Review all ControlNet types and capabilities",
                            project: "Explore custom training possibilities",
                            resources: [
                                {
                                    title: "ControlNet Training Guide",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/12",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 8,
                    title: "Orchestration of Controls & Mid-Project Assessment",
                    description: "Combine multiple controls and assess progress",
                    days: [
                        {
                            id: 1,
                            title: "Combining Multiple Controls",
                            description: "Use multiple ControlNet models simultaneously",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Multi-ControlNet integration",
                                "Control strength balancing",
                                "Conditioning combination strategies"
                            ],
                            practice: "Extract multiple control inputs from single image",
                            project: "Combine pose and Canny edges for complex control",
                            resources: [
                                {
                                    title: "Multi-ControlNet Guide",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/188",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Multiple Controls - Day 2",
                            description: "Advanced multi-control techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Control priority management",
                                "Conflict resolution",
                                "Optimal control combinations"
                            ],
                            practice: "Handle complex multi-control scenarios",
                            project: "Create images with precise multi-factor control",
                            resources: [
                                {
                                    title: "Advanced Multi-Control",
                                    url: "https://github.com/Mikubill/sd-webui-controlnet/discussions/1000",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Multiple Controls - Day 3",
                            description: "Master complex control orchestration",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Advanced orchestration patterns",
                                "Real-time control adjustment",
                                "Quality optimization"
                            ],
                            practice: "Focus on achieving high-quality outputs",
                            project: "Demonstrate precise control with multiple inputs",
                            resources: [
                                {
                                    title: "ControlNet Best Practices",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/200",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Refinement & Problem Solving",
                            description: "Troubleshoot and optimize control applications",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Common issue troubleshooting",
                                "Artifact reduction",
                                "Fidelity optimization"
                            ],
                            practice: "Solve common ControlNet problems",
                            project: "Create high-quality controlled outputs",
                            resources: [
                                {
                                    title: "Troubleshooting Guide",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/56",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Problem Solving - Day 2",
                            description: "Advanced troubleshooting techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Advanced artifact handling",
                                "Control strength fine-tuning",
                                "Model compatibility issues"
                            ],
                            practice: "Fine-tune control parameters for optimal results",
                            project: "Solve complex generation problems",
                            resources: [
                                {
                                    title: "Advanced Troubleshooting",
                                    url: "https://github.com/Mikubill/sd-webui-controlnet/discussions/1234",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Mid-Project Assessment Preparation",
                            description: "Prepare for project assessment and review",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Progress review",
                                "Skill assessment",
                                "Project planning"
                            ],
                            practice: "Review all learned ControlNet techniques",
                            project: "Prepare demonstration of skills",
                            resources: [
                                {
                                    title: "Project Assessment Guidelines",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/300",
                                    type: "discussion",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Project: Advanced Controlled Generation UI",
                            description: "Build comprehensive control application",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Advanced UI development",
                                "Multiple control integration",
                                "User experience design"
                            ],
                            practice: "Build sophisticated Gradio/Streamlit app",
                            project: "Complete application with multiple control options",
                            resources: [
                                {
                                    title: "Streamlit Tutorial",
                                    url: "https://docs.streamlit.io/",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Identity Preservation",
            duration: "Weeks 9-12",
            goal: "Implement robust identity preservation in generated images",
            color: "purple",
            icon: "user",
            weeks: [
                {
                    id: 9,
                    title: "Facial Embedding & Identity Models",
                    description: "Understand and implement facial recognition for identity preservation",
                    days: [
                        {
                            id: 1,
                            title: "Facial Recognition Concepts",
                            description: "Theoretical foundation of facial recognition systems",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Face detection and alignment",
                                "Embedding extraction",
                                "Triplet Loss and ArcFace"
                            ],
                            practice: "Read papers on FaceNet and ArcFace",
                            project: "No coding project, focus on theory",
                            resources: [
                                {
                                    title: "FaceNet Paper",
                                    url: "https://arxiv.org/abs/1503.03832",
                                    type: "paper",
                                    duration: "2 hours"
                                },
                                {
                                    title: "ArcFace Paper",
                                    url: "https://arxiv.org/abs/1801.07698",
                                    type: "paper",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Facial Recognition - Day 2",
                            description: "Advanced facial recognition concepts",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Face embedding spaces",
                                "Similarity metrics",
                                "Recognition accuracy factors"
                            ],
                            practice: "Study different facial recognition approaches",
                            project: "Understand embedding space properties",
                            resources: [
                                {
                                    title: "Facial Recognition Overview",
                                    url: "https://towardsdatascience.com/a-comprehensive-guide-to-facial-recognition-89d13c4880d9",
                                    type: "article",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Using Pre-trained Facial Embedders",
                            description: "Practical implementation of facial embedding extraction",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "InsightFace and DeepFace libraries",
                                "Embedding extraction pipeline",
                                "Similarity calculation"
                            ],
                            practice: "Install and use InsightFace or DeepFace",
                            project: "Calculate similarity between face embeddings",
                            resources: [
                                {
                                    title: "InsightFace GitHub",
                                    url: "https://github.com/deepinsight/insightface",
                                    type: "documentation",
                                    duration: "2 hours"
                                },
                                {
                                    title: "DeepFace Tutorial",
                                    url: "https://github.com/serengil/deepface",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Facial Embedders - Day 2",
                            description: "Advanced embedding techniques and applications",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Embedding quality assessment",
                                "Multiple face handling",
                                "Real-time embedding extraction"
                            ],
                            practice: "Extract embeddings from multiple images of same face",
                            project: "Build face similarity application",
                            resources: [
                                {
                                    title: "Face Embedding Applications",
                                    url: "https://medium.com/@ageitgey/machine-learning-is-fun-part-4-modern-face-recognition-with-deep-learning-c3cffc121d78",
                                    type: "article",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Preparing Data for Identity",
                            description: "Data preparation for robust identity preservation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Diverse image collection",
                                "Data quality requirements",
                                "Identity representation"
                            ],
                            practice: "Gather varied photos for identity training",
                            project: "Prepare identity dataset with diverse images",
                            resources: [
                                {
                                    title: "Data Preparation Guide",
                                    url: "https://huggingface.co/docs/diffusers/training/dreambooth",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Data Preparation - Day 2",
                            description: "Advanced data preparation techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Data augmentation",
                                "Quality filtering",
                                "Dataset organization"
                            ],
                            practice: "Process and organize identity dataset",
                            project: "Create optimized identity training dataset",
                            resources: [
                                {
                                    title: "Data Augmentation Techniques",
                                    url: "https://pytorch.org/vision/stable/transforms.html",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & Embedding Visualization",
                            description: "Review concepts and visualize embeddings",
                            duration: "4-6 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Embedding space visualization",
                                "Concept review",
                                "Progress assessment"
                            ],
                            practice: "Use t-SNE or UMAP for embedding visualization",
                            project: "Visualize facial embedding relationships",
                            resources: [
                                {
                                    title: "t-SNE Visualization Guide",
                                    url: "https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 10,
                    title: "IP-Adapter Integration",
                    description: "Implement identity preservation with IP-Adapter",
                    days: [
                        {
                            id: 1,
                            title: "IP-Adapter Theory & diffusers Integration",
                            description: "Understand IP-Adapter architecture and integration",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "IP-Adapter working mechanism",
                                "Identity injection without fine-tuning",
                                "Hugging Face integration"
                            ],
                            practice: "Read IP-Adapter paper and documentation",
                            project: "No coding, focus on theory understanding",
                            resources: [
                                {
                                    title: "IP-Adapter Paper",
                                    url: "https://arxiv.org/abs/2308.06721",
                                    type: "paper",
                                    duration: "2 hours"
                                },
                                {
                                    title: "IP-Adapter GitHub",
                                    url: "https://github.com/tencent-ailab/IP-Adapter",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "IP-Adapter Theory - Day 2",
                            description: "Deep dive into IP-Adapter implementation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Adapter architecture details",
                                "Cross-attention mechanisms",
                                "Multi-scale features"
                            ],
                            practice: "Study IP-Adapter implementation details",
                            project: "Understand identity preservation mechanisms",
                            resources: [
                                {
                                    title: "IP-Adapter Technical Details",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/blob/main/README.md",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "IP-Adapter Theory - Day 3",
                            description: "Advanced IP-Adapter concepts and variants",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Different IP-Adapter variants",
                                "Performance considerations",
                                "Integration patterns"
                            ],
                            practice: "Explore different IP-Adapter model types",
                            project: "Plan IP-Adapter integration strategy",
                            resources: [
                                {
                                    title: "IP-Adapter Model Variants",
                                    url: "https://huggingface.co/models?library=ip-adapter",
                                    type: "resource",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Hands-on with IP-Adapter",
                            description: "Practical implementation of IP-Adapter",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Model loading and setup",
                                "Reference image integration",
                                "Identity preservation testing"
                            ],
                            practice: "Load IP-Adapter with Stable Diffusion",
                            project: "Generate images with identity preservation",
                            resources: [
                                {
                                    title: "IP-Adapter Diffusers Guide",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/ip_adapter",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "IP-Adapter - Day 2",
                            description: "Advanced IP-Adapter usage and optimization",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Weight and strength adjustment",
                                "Multiple reference images",
                                "Quality optimization"
                            ],
                            practice: "Use own face images as IP-Adapter reference",
                            project: "Generate varied images with consistent identity",
                            resources: [
                                {
                                    title: "IP-Adapter Best Practices",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/45",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "IP-Adapter - Day 3",
                            description: "Master IP-Adapter for production use",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Production-ready implementation",
                                "Performance optimization",
                                "Edge case handling"
                            ],
                            practice: "Experiment with IP-Adapter weighting",
                            project: "Achieve robust identity preservation",
                            resources: [
                                {
                                    title: "Advanced IP-Adapter Techniques",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/78",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Project: Identity-Preserving Generator",
                            description: "Build application for identity-preserving generation",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Application development",
                                "User interface design",
                                "Model integration"
                            ],
                            practice: "Create Gradio app with IP-Adapter",
                            project: "Build complete identity preservation application",
                            resources: [
                                {
                                    title: "Gradio IP-Adapter Example",
                                    url: "https://huggingface.co/spaces/hysts/IP-Adapter",
                                    type: "example",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 11,
                    title: "Combining Identity with Other Controls",
                    description: "Integrate identity preservation with other control mechanisms",
                    days: [
                        {
                            id: 1,
                            title: "IP-Adapter + ControlNet (Pose)",
                            description: "Combine identity preservation with pose control",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Multi-conditioning integration",
                                "Pose and identity combination",
                                "Conditioning management"
                            ],
                            practice: "Combine IP-Adapter with ControlNet for pose",
                            project: "Generate images with specific pose and identity",
                            resources: [
                                {
                                    title: "Multi-Conditioning Guide",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/112",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Pose + Identity - Day 2",
                            description: "Advanced pose and identity integration",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Advanced conditioning balance",
                                "Conflict resolution",
                                "Quality optimization"
                            ],
                            practice: "Handle complex pose and identity scenarios",
                            project: "Master precise pose and identity control",
                            resources: [
                                {
                                    title: "Advanced Multi-Conditioning",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/400",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Pose + Identity - Day 3",
                            description: "Expert-level integration techniques",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Expert parameter tuning",
                                "Edge case handling",
                                "Production optimization"
                            ],
                            practice: "Achieve perfect pose and identity combination",
                            project: "Create professional-quality results",
                            resources: [
                                {
                                    title: "Expert Techniques Guide",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/156",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "IP-Adapter + ControlNet (Attire/Style)",
                            description: "Combine identity with clothing and style control",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Clothing transfer techniques",
                                "Style conditioning",
                                "Complex prompt engineering"
                            ],
                            practice: "Use clothing images for detailed text prompts",
                            project: "Generate images with specific clothing and identity",
                            resources: [
                                {
                                    title: "Clothing Transfer Guide",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/189",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Attire + Identity - Day 2",
                            description: "Advanced clothing and identity integration",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Detailed clothing control",
                                "Texture and color preservation",
                                "Complex style combinations"
                            ],
                            practice: "Refine prompts for clothing details",
                            project: "Achieve precise clothing and identity control",
                            resources: [
                                {
                                    title: "Advanced Clothing Control",
                                    url: "https://github.com/lllyasviel/ControlNet/discussions/512",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Attire + Identity - Day 3",
                            description: "Master clothing and identity integration",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Expert-level prompt refinement",
                                "Multi-garment control",
                                "Production-ready results"
                            ],
                            practice: "Combine IP-Adapter + ControlNet + detailed text prompts",
                            project: "Generate images with specific green shirt and black pants",
                            resources: [
                                {
                                    title: "Multi-Garment Control",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/234",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & Troubleshooting Combined Controls",
                            description: "Review techniques and troubleshoot integration issues",
                            duration: "4-6 hours",
                            difficulty: "Expert",
                            topics: [
                                "Combined controls review",
                                "Common issue identification",
                                "Optimization strategies"
                            ],
                            practice: "Review techniques for combining controls",
                            project: "Identify and solve common integration problems",
                            resources: [
                                {
                                    title: "Troubleshooting Combined Controls",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/267",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 12,
                    title: "Advanced Identity Techniques",
                    description: "Explore DreamBooth and LoRA for enhanced identity preservation",
                    days: [
                        {
                            id: 1,
                            title: "DreamBooth / LoRA Theory",
                            description: "Understand fine-tuning approaches for identity preservation",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "DreamBooth fine-tuning process",
                                "LoRA efficient adaptation",
                                "Unique identifier concepts"
                            ],
                            practice: "Read DreamBooth paper and LoRA documentation",
                            project: "No coding, focus on theoretical understanding",
                            resources: [
                                {
                                    title: "DreamBooth Paper",
                                    url: "https://arxiv.org/abs/2208.12242",
                                    type: "paper",
                                    duration: "2 hours"
                                },
                                {
                                    title: "LoRA Paper",
                                    url: "https://arxiv.org/abs/2106.09685",
                                    type: "paper",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "DreamBooth/LoRA Theory - Day 2",
                            description: "Deep dive into fine-tuning mechanisms",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Fine-tuning vs adaptation",
                                "Parameter efficiency",
                                "Training dynamics"
                            ],
                            practice: "Study Hugging Face diffusers DreamBooth examples",
                            project: "Understand training process and requirements",
                            resources: [
                                {
                                    title: "DreamBooth Diffusers Guide",
                                    url: "https://huggingface.co/docs/diffusers/training/dreambooth",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "DreamBooth/LoRA Theory - Day 3",
                            description: "Advanced concepts and implementation planning",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Implementation requirements",
                                "GPU resource planning",
                                "Training strategy"
                            ],
                            practice: "Plan DreamBooth/LoRA training setup",
                            project: "Prepare for practical implementation",
                            resources: [
                                {
                                    title: "LoRA Training Guide",
                                    url: "https://huggingface.co/docs/diffusers/training/lora",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Hands-on with DreamBooth / LoRA",
                            description: "Practical implementation of fine-tuning",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Training pipeline setup",
                                "Data preparation",
                                "Training configuration"
                            ],
                            practice: "Set up DreamBooth training pipeline",
                            project: "Train custom LoRA on personal subject",
                            resources: [
                                {
                                    title: "DreamBooth Training Tutorial",
                                    url: "https://huggingface.co/blog/dreambooth",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "DreamBooth/LoRA - Day 2",
                            description: "Advanced training techniques and optimization",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Training optimization",
                                "Hyperparameter tuning",
                                "Quality assessment"
                            ],
                            practice: "Train model with optimized parameters",
                            project: "Achieve high-quality identity preservation",
                            resources: [
                                {
                                    title: "Advanced Training Techniques",
                                    url: "https://github.com/huggingface/diffusers/issues/2471",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "DreamBooth/LoRA - Day 3",
                            description: "Model evaluation and deployment",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Model evaluation",
                                "Performance comparison",
                                "Deployment preparation"
                            ],
                            practice: "Evaluate trained model quality",
                            project: "Compare results with IP-Adapter approach",
                            resources: [
                                {
                                    title: "Model Evaluation Guide",
                                    url: "https://huggingface.co/docs/diffusers/using-diffusers/loading#checkpoint-variants",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Project: The Ultimate Virtual Try-On Architect",
                            description: "Build comprehensive virtual try-on application",
                            duration: "6-8 hours",
                            difficulty: "Expert",
                            topics: [
                                "Full system integration",
                                "User experience design",
                                "Production deployment"
                            ],
                            practice: "Integrate all learned components",
                            project: "Build complete virtual try-on system",
                            resources: [
                                {
                                    title: "Full System Integration Guide",
                                    url: "https://github.com/tencent-ailab/IP-Adapter/discussions/345",
                                    type: "discussion",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Orchestration & Deployment",
            duration: "Weeks 13-14",
            goal: "Turn your scripts into a robust, deployable application",
            color: "orange",
            icon: "rocket",
            weeks: [
                {
                    id: 13,
                    title: "API Development & Containerization",
                    description: "Build production-ready APIs and containerize applications",
                    days: [
                        {
                            id: 1,
                            title: "FastAPI Fundamentals",
                            description: "Build REST APIs with FastAPI",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "REST API design",
                                "Request/response models",
                                "Async/await patterns"
                            ],
                            practice: "Create endpoints for basic data processing",
                            project: "FastAPI endpoint that takes text prompt and returns response",
                            resources: [
                                {
                                    title: "FastAPI Tutorial",
                                    url: "https://fastapi.tiangolo.com/tutorial/",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "FastAPI for ML Models",
                                    url: "https://testdriven.io/blog/fastapi-machine-learning/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "FastAPI - Day 2",
                            description: "Advanced API development techniques",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Advanced routing",
                                "Middleware implementation",
                                "Error handling"
                            ],
                            practice: "Build complex API endpoints",
                            project: "Implement comprehensive API structure",
                            resources: [
                                {
                                    title: "FastAPI Advanced Features",
                                    url: "https://fastapi.tiangolo.com/advanced/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Integrating AI Models with FastAPI",
                            description: "Connect AI models with API endpoints",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Model loading optimization",
                                "Async model inference",
                                "File upload handling"
                            ],
                            practice: "Load diffusers pipeline at startup",
                            project: "Build image generation API endpoint",
                            resources: [
                                {
                                    title: "FastAPI File Uploads",
                                    url: "https://fastapi.tiangolo.com/tutorial/request-files/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "AI Integration - Day 2",
                            description: "Advanced model integration techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Batch processing",
                                "Memory management",
                                "Response optimization"
                            ],
                            practice: "Handle image uploads and processing",
                            project: "Complete AI model API integration",
                            resources: [
                                {
                                    title: "FastAPI Background Tasks",
                                    url: "https://fastapi.tiangolo.com/tutorial/background-tasks/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Docker Fundamentals",
                            description: "Containerize applications with Docker",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Dockerfile creation",
                                "Image building",
                                "Container management"
                            ],
                            practice: "Dockerize simple Python applications",
                            project: "Create Dockerfile for FastAPI application",
                            resources: [
                                {
                                    title: "Docker Get Started",
                                    url: "https://docs.docker.com/get-started/",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "Docker for Python",
                                    url: "https://docs.docker.com/language/python/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "Docker - Day 2",
                            description: "Advanced Docker techniques and optimization",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Multi-stage builds",
                                "Docker Compose",
                                "Container optimization"
                            ],
                            practice: "Build and run Docker container locally",
                            project: "Optimize Docker image for AI applications",
                            resources: [
                                {
                                    title: "Docker Best Practices",
                                    url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Weekend Review & API Testing",
                            description: "Test and optimize API performance",
                            duration: "4-6 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "API testing strategies",
                                "Performance optimization",
                                "Container verification"
                            ],
                            practice: "Thoroughly test API endpoints",
                            project: "Ensure Docker container builds and runs correctly",
                            resources: [
                                {
                                    title: "FastAPI Testing",
                                    url: "https://fastapi.tiangolo.com/tutorial/testing/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 14,
                    title: "Deployment & Optimization",
                    description: "Deploy application to cloud and optimize performance",
                    days: [
                        {
                            id: 1,
                            title: "Cloud Deployment (AWS EC2/GCP Compute Engine)",
                            description: "Deploy application to cloud infrastructure",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Cloud instance setup",
                                "GPU instance configuration",
                                "SSH access management"
                            ],
                            practice: "Set up GPU instance on cloud provider",
                            project: "Deploy Docker container to cloud instance",
                            resources: [
                                {
                                    title: "AWS EC2 Tutorial",
                                    url: "https://aws.amazon.com/ec2/getting-started/",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "GCP Compute Engine Guide",
                                    url: "https://cloud.google.com/compute/docs/tutorials",
                                    type: "tutorial",
                                    duration: "3 hours"
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: "Cloud Deployment - Day 2",
                            description: "Advanced cloud deployment techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Docker deployment optimization",
                                "Network configuration",
                                "Security setup"
                            ],
                            practice: "Deploy container with GPU support",
                            project: "Access application via public IP",
                            resources: [
                                {
                                    title: "Docker Cloud Deployment",
                                    url: "https://docs.docker.com/cloud/",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 3,
                            title: "Cloud Deployment - Day 3",
                            description: "Production deployment and monitoring",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Production best practices",
                                "Monitoring setup",
                                "Scaling preparation"
                            ],
                            practice: "Set up monitoring and logging",
                            project: "Achieve production-ready deployment",
                            resources: [
                                {
                                    title: "Production Deployment Guide",
                                    url: "https://fastapi.tiangolo.com/deployment/",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 4,
                            title: "Model Optimization & Monitoring",
                            description: "Optimize models and implement monitoring",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Model quantization",
                                "Performance monitoring",
                                "Logging implementation"
                            ],
                            practice: "Run models with quantization for optimization",
                            project: "Integrate logging into FastAPI app",
                            resources: [
                                {
                                    title: "Model Quantization Guide",
                                    url: "https://huggingface.co/docs/optimum/index",
                                    type: "documentation",
                                    duration: "2 hours"
                                },
                                {
                                    title: "Python Logging",
                                    url: "https://docs.python.org/3/howto/logging.html",
                                    type: "documentation",
                                    duration: "1 hour"
                                }
                            ]
                        },
                        {
                            id: 5,
                            title: "Optimization - Day 2",
                            description: "Advanced optimization techniques",
                            duration: "6-8 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Advanced quantization",
                                "ONNX export concepts",
                                "Experiment tracking"
                            ],
                            practice: "Track generation runs with W&B/MLflow",
                            project: "Implement comprehensive optimization",
                            resources: [
                                {
                                    title: "Weights & Biases Guide",
                                    url: "https://docs.wandb.ai/quickstart",
                                    type: "tutorial",
                                    duration: "2 hours"
                                },
                                {
                                    title: "MLflow Tutorial",
                                    url: "https://mlflow.org/docs/latest/tutorials-and-examples/tutorial.html",
                                    type: "tutorial",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 6,
                            title: "User Interface Development",
                            description: "Build user-friendly frontend interface",
                            duration: "6-8 hours",
                            difficulty: "Intermediate",
                            topics: [
                                "Frontend development",
                                "API consumption",
                                "User experience design"
                            ],
                            practice: "Build frontend that consumes your API",
                            project: "Create complete end-to-end user interface",
                            resources: [
                                {
                                    title: "Streamlit Tutorial",
                                    url: "https://docs.streamlit.io/",
                                    type: "tutorial",
                                    duration: "3 hours"
                                },
                                {
                                    title: "Gradio Components",
                                    url: "https://www.gradio.app/docs/components",
                                    type: "documentation",
                                    duration: "2 hours"
                                }
                            ]
                        },
                        {
                            id: 7,
                            title: "Final Project Review & Future Work",
                            description: "Review complete project and plan future enhancements",
                            duration: "4-6 hours",
                            difficulty: "Advanced",
                            topics: [
                                "Project documentation",
                                "Architecture review",
                                "Future planning"
                            ],
                            practice: "Document architecture and code",
                            project: "Present complete virtual try-on system",
                            resources: [
                                {
                                    title: "Project Documentation Guide",
                                    url: "https://www.write-the-docs.org/guide/",
                                    type: "guide",
                                    duration: "1 hour"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// src/data/curriculum.js
// ... (your complete curriculum data)

// Helper function to get all days with proper structure
export const getAllDays = () => {
    const days = [];
    curriculum.phases.forEach(phase => {
        phase.weeks.forEach(week => {
            week.days.forEach(day => {
                days.push({
                    ...day,
                    phaseId: phase.id,
                    weekId: week.id,
                    phaseTitle: phase.title,
                    weekTitle: week.title
                });
            });
        });
    });
    return days;
};

// Helper function to get progress statistics
export const getProgressStats = (completedDays = []) => {
    const totalDays = getAllDays().length;
    const completedCount = completedDays.length;
    const percentage = Math.round((completedCount / totalDays) * 100);

    return {
        totalDays,
        completedCount,
        percentage,
        remaining: totalDays - completedCount
    };
};

// Helper function to get phase progress
export const getPhaseProgress = (phaseId, completedDays = []) => {
    const phase = curriculum.phases.find(p => p.id === phaseId);
    if (!phase) return 0;

    const phaseDays = [];
    phase.weeks.forEach(week => {
        week.days.forEach(day => {
            phaseDays.push(`${phaseId}-${week.id}-${day.id}`);
        });
    });

    const completedPhaseDays = completedDays.filter(dayId =>
        phaseDays.includes(dayId)
    );

    return Math.round((completedPhaseDays.length / phaseDays.length) * 100);
};

// Helper function to find specific day
export const findDay = (phaseId, weekId, dayId) => {
    const phase = curriculum.phases.find(p => p.id === phaseId);
    if (!phase) return null;

    const week = phase.weeks.find(w => w.id === weekId);
    if (!week) return null;

    const day = week.days.find(d => d.id === dayId);
    if (!day) return null;

    return {
        ...day,
        phaseId: phase.id,
        weekId: week.id,
        phaseTitle: phase.title,
        weekTitle: week.title
    };
};
// Helper function to get next day
export const getNextDay = (currentPhaseId, currentWeekId, currentDayId) => {
    const allDays = getAllDays();
    const currentIndex = allDays.findIndex(day =>
        day.phaseId === currentPhaseId &&
        day.weekId === currentWeekId &&
        day.id === currentDayId
    );

    if (currentIndex < allDays.length - 1) {
        return allDays[currentIndex + 1];
    }
    return null;
};

// Helper function to get previous day
export const getPreviousDay = (currentPhaseId, currentWeekId, currentDayId) => {
    const allDays = getAllDays();
    const currentIndex = allDays.findIndex(day =>
        day.phaseId === currentPhaseId &&
        day.weekId === currentWeekId &&
        day.id === currentDayId
    );

    if (currentIndex > 0) {
        return allDays[currentIndex - 1];
    }
    return null;
};
