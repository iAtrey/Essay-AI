# EssayAI - Academic Writing Assistant

A specialized ChatGPT wrapper website designed specifically for writing essays for English class or college essays. This tool provides comprehensive academic writing assistance with multiple specialized features.

## 🎓 Features

### 📝 Essay Writer
- **Multiple Essay Types**: Argumentative, Expository, Persuasive, Narrative, Descriptive, Analytical, Compare & Contrast, Cause & Effect, Research Paper, Literary Analysis
- **Customizable Length**: From 500 to 3000 words
- **Academic Levels**: High School, College, University, Graduate
- **Writing Styles**: Formal, Academic, Conversational, Creative
- **Citation Styles**: APA, MLA, Chicago, Harvard
- **Key Points & Sources**: Include your main arguments and references
- **Real-time Statistics**: Word count, character count, paragraph count

### ✨ Essay Improver
- **General Improvement**: Overall clarity, flow, and academic tone
- **Grammar & Style**: Grammar and style corrections
- **Structure & Flow**: Reorganize for better logical flow
- **Academic Tone**: Maintain formal academic language
- **Clarity & Conciseness**: Simplify and clarify sentences
- **Argument Strength**: Strengthen arguments with better evidence

### 📚 Citation Helper
- **Multiple Citation Styles**: APA, MLA, Chicago, Harvard
- **Source Types**: Books, Journal Articles, Websites, Newspapers, Magazines, Videos, Podcasts, Interviews
- **Automatic Formatting**: Properly formatted citations
- **Easy Copy**: One-click copy to clipboard

### 🔍 Grammar Checker
- **Comprehensive Checking**: Grammar, spelling, style, punctuation
- **Detailed Feedback**: Specific suggestions and explanations
- **Error Categorization**: Organized by error type
- **Corrected Text**: Copy the improved version

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Start using EssayAI immediately!

### Usage

#### Writing an Essay
1. Navigate to the "Essay Writer" tab
2. Select your essay type (e.g., Argumentative)
3. Enter your topic/title
4. Choose your target length and academic level
5. Select your preferred writing style and citation format
6. Add key points and sources (optional)
7. Click "Generate Essay"
8. Copy or export your generated essay

#### Improving an Essay
1. Go to the "Essay Improver" tab
2. Select the type of improvement you want
3. Paste your existing essay
4. Click "Improve Essay"
5. Review the improved version

#### Generating Citations
1. Switch to the "Citation Helper" tab
2. Choose your citation style (APA, MLA, etc.)
3. Select the source type
4. Fill in the required information
5. Click "Generate Citation"
6. Copy the formatted citation

#### Checking Grammar
1. Open the "Grammar Checker" tab
2. Paste your text
3. Select which aspects to check
4. Click "Check Grammar"
5. Review the suggestions and corrections

## 🛠️ Technical Details

### Architecture
- **Frontend**: Pure HTML, CSS, and JavaScript
- **No Backend Required**: All processing happens client-side
- **Local Storage**: Saves your work automatically
- **Responsive Design**: Works on desktop, tablet, and mobile

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### File Structure
```
essay-ai/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 💡 Tips for Best Results

### Essay Writing
- **Be Specific**: Provide detailed topics and key points
- **Include Sources**: Add relevant sources for better citations
- **Specify Length**: Choose appropriate length for your assignment
- **Use Instructions**: Add specific requirements in additional instructions

### Essay Improvement
- **Choose Focus**: Select the most relevant improvement type
- **Review Changes**: Always review the improved version
- **Iterate**: Use the improver multiple times for best results

### Citations
- **Complete Information**: Fill in as much source information as possible
- **Verify Accuracy**: Double-check generated citations
- **Consistent Style**: Use the same citation style throughout your paper

### Grammar Checking
- **Check Everything**: Enable all grammar check options
- **Review Suggestions**: Consider each suggestion carefully
- **Context Matters**: Some suggestions may not fit your context

## 🔧 Customization

### Adding New Essay Types
Edit the `generateMockEssay` function in `script.js` to add new essay types.

### Modifying Citation Styles
Update the `generateMockCitation` function to add new citation formats.

### Changing the Theme
Modify the CSS variables in `styles.css` to customize colors and styling.

## 📱 Mobile Usage

The website is fully responsive and works great on mobile devices:
- Touch-friendly interface
- Optimized layouts for small screens
- Easy copy/paste functionality
- Auto-save feature

## 🔒 Privacy & Security

- **No Data Sent**: All processing happens locally in your browser
- **Local Storage**: Your work is saved locally on your device
- **No Registration**: No account creation required
- **Offline Capable**: Works without internet connection

## 🆘 Troubleshooting

### Common Issues

**Essay not generating?**
- Make sure you've entered a topic
- Check that all required fields are filled
- Try refreshing the page

**Citations not formatting correctly?**
- Verify all required fields are filled
- Check that the citation style matches your requirements
- Ensure the source type is correct

**Grammar checker not working?**
- Make sure you've pasted text to check
- Verify that at least one check option is selected
- Try with a smaller text sample

**Data not saving?**
- Check that your browser supports localStorage
- Ensure you have sufficient storage space
- Try clearing browser cache and cookies

## 🤝 Contributing

This is a demonstration project. For production use, consider:
- Adding real AI integration (OpenAI API)
- Implementing user accounts
- Adding more citation styles
- Expanding grammar checking capabilities
- Adding plagiarism detection

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by academic writing needs
- Designed for educational purposes
- Uses Font Awesome icons
- Google Fonts (Inter) for typography

---

**Note**: This is a demonstration version with mock AI responses. For production use with real AI capabilities, you would need to integrate with OpenAI's API or similar services. 