// EssayAI - Academic Writing Assistant
class EssayAI {
    constructor() {
        this.currentTab = 'essay-writer';
        this.settings = this.loadSettings();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadSavedData();
        this.updateStats();
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Essay Writer
        document.getElementById('generateEssayBtn').addEventListener('click', () => {
            this.generateEssay();
        });

        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyToClipboard('essayOutput');
        });

        document.getElementById('clearBtn').addEventListener('click', () => {
            this.clearOutput('essayOutput');
        });

        // Essay Improver
        document.getElementById('improveEssayBtn').addEventListener('click', () => {
            this.improveEssay();
        });

        document.getElementById('copyImprovedBtn').addEventListener('click', () => {
            this.copyToClipboard('improvedEssayOutput');
        });

        // Citation Helper
        document.getElementById('generateCitationBtn').addEventListener('click', () => {
            this.generateCitation();
        });

        document.getElementById('copyCitationBtn').addEventListener('click', () => {
            this.copyToClipboard('citationOutput');
        });

        document.getElementById('clearCitationsBtn').addEventListener('click', () => {
            this.clearOutput('citationOutput');
        });

        // Grammar Checker
        document.getElementById('checkGrammarBtn').addEventListener('click', () => {
            this.checkGrammar();
        });

        document.getElementById('copyCorrectedBtn').addEventListener('click', () => {
            this.copyToClipboard('grammarOutput');
        });

        // Header actions
        document.getElementById('saveBtn').addEventListener('click', () => {
            this.saveData();
        });

        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportEssay();
        });

        // Settings modal
        document.getElementById('saveSettings').addEventListener('click', () => {
            this.saveSettings();
        });

        document.getElementById('closeSettings').addEventListener('click', () => {
            this.closeSettingsModal();
        });

        document.getElementById('cancelSettings').addEventListener('click', () => {
            this.closeSettingsModal();
        });

        // Real-time stats update
        document.getElementById('essayOutput').addEventListener('input', () => {
            this.updateStats();
        });

        // Auto-save on input
        this.setupAutoSave();
    }

    switchTab(tabName) {
        // Update active tab button
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');

        this.currentTab = tabName;
    }

    async generateEssay() {
        const formData = this.getEssayFormData();
        
        if (!formData.topic) {
            this.showError('Please enter an essay topic');
            return;
        }

        this.showLoading('Generating your essay...');

        try {
            // Simulate API call delay
            await this.delay(2000);

            const essay = this.generateMockEssay(formData);
            this.displayEssay(essay);
            this.updateStats();
            this.saveData();
        } catch (error) {
            this.showError('Failed to generate essay. Please try again.');
        } finally {
            this.hideLoading();
        }
    }

    async improveEssay() {
        const essay = document.getElementById('essayToImprove').value;
        const improvementType = document.getElementById('improvementType').value;

        if (!essay.trim()) {
            this.showError('Please paste an essay to improve');
            return;
        }

        this.showLoading('Improving your essay...');

        try {
            await this.delay(1500);
            const improvedEssay = this.generateMockImprovement(essay, improvementType);
            this.displayImprovedEssay(improvedEssay);
        } catch (error) {
            this.showError('Failed to improve essay. Please try again.');
        } finally {
            this.hideLoading();
        }
    }

    async generateCitation() {
        const formData = this.getCitationFormData();
        
        if (!formData.title || !formData.author) {
            this.showError('Please enter at least the title and author');
            return;
        }

        this.showLoading('Generating citation...');

        try {
            await this.delay(1000);
            const citation = this.generateMockCitation(formData);
            this.displayCitation(citation);
        } catch (error) {
            this.showError('Failed to generate citation. Please try again.');
        } finally {
            this.hideLoading();
        }
    }

    async checkGrammar() {
        const text = document.getElementById('textToCheck').value;
        const options = this.getGrammarCheckOptions();

        if (!text.trim()) {
            this.showError('Please paste text to check');
            return;
        }

        this.showLoading('Checking grammar and style...');

        try {
            await this.delay(1500);
            const results = this.generateMockGrammarCheck(text, options);
            this.displayGrammarResults(results);
        } catch (error) {
            this.showError('Failed to check grammar. Please try again.');
        } finally {
            this.hideLoading();
        }
    }

    getEssayFormData() {
        return {
            type: document.getElementById('essayType').value,
            topic: document.getElementById('essayTopic').value,
            length: document.getElementById('essayLength').value,
            level: document.getElementById('academicLevel').value,
            style: document.getElementById('writingStyle').value,
            citation: document.getElementById('citationStyle').value,
            keyPoints: document.getElementById('keyPoints').value,
            sources: document.getElementById('sources').value,
            instructions: document.getElementById('additionalInstructions').value
        };
    }

    getCitationFormData() {
        return {
            style: document.getElementById('citationStyle2').value,
            type: document.getElementById('sourceType').value,
            title: document.getElementById('sourceTitle').value,
            author: document.getElementById('sourceAuthor').value,
            year: document.getElementById('sourceYear').value,
            url: document.getElementById('sourceUrl').value,
            publisher: document.getElementById('sourcePublisher').value
        };
    }

    getGrammarCheckOptions() {
        return {
            grammar: document.getElementById('checkGrammar').checked,
            spelling: document.getElementById('checkSpelling').checked,
            style: document.getElementById('checkStyle').checked,
            punctuation: document.getElementById('checkPunctuation').checked
        };
    }

    generateMockEssay(data) {
        const essayTypes = {
            'argumentative': 'Argumentative Essay',
            'expository': 'Expository Essay',
            'persuasive': 'Persuasive Essay',
            'narrative': 'Narrative Essay',
            'descriptive': 'Descriptive Essay',
            'analytical': 'Analytical Essay',
            'compare-contrast': 'Compare & Contrast Essay',
            'cause-effect': 'Cause & Effect Essay',
            'research': 'Research Paper',
            'literary-analysis': 'Literary Analysis'
        };

        const essayType = essayTypes[data.type] || 'Essay';
        const wordCount = parseInt(data.length);
        const paragraphs = Math.ceil(wordCount / 200);

        let essay = `<h1>${data.topic}</h1>\n\n`;
        
        // Introduction
        essay += `<h2>Introduction</h2>\n`;
        essay += `<p>This ${essayType.toLowerCase()} explores the topic of "${data.topic}" and its implications in contemporary society. `;
        essay += `The discussion will examine various perspectives and provide a comprehensive analysis of the subject matter. `;
        essay += `Through careful examination of relevant evidence and scholarly sources, this essay aims to provide a thorough understanding of the topic.</p>\n\n`;

        // Body paragraphs
        for (let i = 1; i <= paragraphs - 2; i++) {
            essay += `<h3>Body Paragraph ${i}</h3>\n`;
            essay += `<p>This paragraph presents key arguments and evidence related to "${data.topic}". `;
            essay += `The analysis incorporates relevant research findings and theoretical frameworks to support the main thesis. `;
            essay += `By examining multiple perspectives, this section provides a balanced view of the topic under discussion.</p>\n\n`;
        }

        // Conclusion
        essay += `<h2>Conclusion</h2>\n`;
        essay += `<p>In conclusion, this ${essayType.toLowerCase()} has demonstrated the significance of "${data.topic}" and its broader implications. `;
        essay += `The analysis has revealed important insights that contribute to our understanding of this complex subject. `;
        essay += `Future research should continue to explore these themes to further develop our knowledge in this area.</p>\n\n`;

        // Add citations if requested
        if (data.citation !== 'none') {
            essay += `<h3>References</h3>\n`;
            essay += `<p>Smith, J. (2024). Academic Writing Guide. Journal of Education, 15(2), 45-60.</p>\n`;
            essay += `<p>Johnson, A. (2023). Research Methods in Social Sciences. University Press.</p>\n`;
        }

        return essay;
    }

    generateMockImprovement(originalEssay, improvementType) {
        const improvements = {
            'general': 'This essay has been improved for overall clarity, flow, and academic tone.',
            'grammar': 'Grammar and style corrections have been applied throughout the essay.',
            'structure': 'The essay structure has been reorganized for better logical flow.',
            'academic': 'The language has been adjusted to maintain a more formal academic tone.',
            'clarity': 'Sentences have been simplified and clarified for better readability.',
            'argument': 'The argument structure has been strengthened with better evidence and reasoning.'
        };

        return `<h3>Improved Essay (${improvementType} focus)</h3>\n\n` +
               `<p><strong>Improvement Summary:</strong> ${improvements[improvementType]}</p>\n\n` +
               `<div class="generated-content">\n` +
               originalEssay.replace(/\n/g, '\n') +
               `\n</div>`;
    }

    generateMockCitation(data) {
        const citations = {
            'mla': {
                'book': `${data.author}. <em>${data.title}</em>. ${data.publisher}, ${data.year}.`,
                'journal': `${data.author}. "${data.title}." <em>Journal Name</em>, vol. 1, no. 1, ${data.year}, pp. 1-10.`,
                'website': `${data.author}. "${data.title}." <em>Website Name</em>, ${data.year}, ${data.url}. Accessed ${new Date().toLocaleDateString()}.`
            },
            'apa': {
                'book': `${data.author}. (${data.year}). <em>${data.title}</em>. ${data.publisher}.`,
                'journal': `${data.author}. (${data.year}). ${data.title}. <em>Journal Name</em>, 1(1), 1-10.`,
                'website': `${data.author}. (${data.year}). ${data.title}. <em>Website Name</em>. ${data.url}`
            }
        };

        const citation = citations[data.style]?.[data.type] || 
                        `${data.author}. (${data.year}). ${data.title}.`;

        return `<div class="citation-item">
            <div class="citation-type">${data.style.toUpperCase()} - ${data.type}</div>
            ${citation}
        </div>`;
    }

    generateMockGrammarCheck(text, options) {
        const errors = [
            {
                type: 'Grammar',
                original: 'The students was studying.',
                suggestion: 'The students were studying.',
                explanation: 'Subject-verb agreement error. "Students" is plural, so use "were".'
            },
            {
                type: 'Style',
                original: 'very very important',
                suggestion: 'extremely important',
                explanation: 'Avoid repetition. Use a stronger adjective instead.'
            },
            {
                type: 'Punctuation',
                original: 'However the results show...',
                suggestion: 'However, the results show...',
                explanation: 'Add a comma after "However" when it begins a sentence.'
            }
        ];

        let results = `<h3>Grammar Check Results</h3>\n\n`;
        results += `<p><strong>Text analyzed:</strong> ${text.length} characters</p>\n\n`;
        
        if (errors.length > 0) {
            results += `<h4>Issues Found (${errors.length})</h4>\n\n`;
            errors.forEach(error => {
                results += `<div class="grammar-error">
                    <div class="error-type">${error.type}</div>
                    <p><strong>Original:</strong> ${error.original}</p>
                    <div class="suggestion"><strong>Suggestion:</strong> ${error.suggestion}</div>
                    <p><em>${error.explanation}</em></p>
                </div>\n`;
            });
        } else {
            results += `<p>No issues found! Your text looks good.</p>\n`;
        }

        return results;
    }

    displayEssay(essay) {
        const output = document.getElementById('essayOutput');
        output.innerHTML = `<div class="generated-content">${essay}</div>`;
    }

    displayImprovedEssay(essay) {
        const output = document.getElementById('improvedEssayOutput');
        output.innerHTML = `<div class="generated-content">${essay}</div>`;
    }

    displayCitation(citation) {
        const output = document.getElementById('citationOutput');
        const existingContent = output.innerHTML;
        const placeholder = output.querySelector('.placeholder');
        
        if (placeholder) {
            output.innerHTML = citation;
        } else {
            output.innerHTML = existingContent + citation;
        }
    }

    displayGrammarResults(results) {
        const output = document.getElementById('grammarOutput');
        output.innerHTML = `<div class="generated-content">${results}</div>`;
    }

    updateStats() {
        const output = document.getElementById('essayOutput');
        const text = output.textContent || output.innerText || '';
        
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const characters = text.length;
        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim()).length;

        document.getElementById('wordCount').textContent = words;
        document.getElementById('charCount').textContent = characters;
        document.getElementById('paragraphCount').textContent = paragraphs;
    }

    copyToClipboard(elementId) {
        const element = document.getElementById(elementId);
        const text = element.textContent || element.innerText || '';
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                this.showSuccess('Copied to clipboard!');
            }).catch(() => {
                this.fallbackCopyTextToClipboard(text);
            });
        } else {
            this.fallbackCopyTextToClipboard(text);
        }
    }

    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showSuccess('Copied to clipboard!');
        } catch (err) {
            this.showError('Failed to copy text');
        }
        
        document.body.removeChild(textArea);
    }

    clearOutput(elementId) {
        const element = document.getElementById(elementId);
        element.innerHTML = `<div class="placeholder">
            <i class="fas fa-${elementId.includes('essay') ? 'file-alt' : elementId.includes('citation') ? 'quote-left' : 'check-circle'}"></i>
            <p>${elementId.includes('essay') ? 'Your essay will appear here after generation' : 
                elementId.includes('citation') ? 'Your citations will appear here' : 'Grammar check results will appear here'}</p>
        </div>`;
        
        if (elementId === 'essayOutput') {
            this.updateStats();
        }
    }

    saveData() {
        const data = {
            essay: document.getElementById('essayOutput').innerHTML,
            improvedEssay: document.getElementById('improvedEssayOutput').innerHTML,
            citations: document.getElementById('citationOutput').innerHTML,
            grammarResults: document.getElementById('grammarOutput').innerHTML,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('essayAI_data', JSON.stringify(data));
        this.showSuccess('Data saved successfully!');
    }

    loadSavedData() {
        const saved = localStorage.getItem('essayAI_data');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (data.essay && !data.essay.includes('placeholder')) {
                    document.getElementById('essayOutput').innerHTML = data.essay;
                }
                if (data.improvedEssay && !data.improvedEssay.includes('placeholder')) {
                    document.getElementById('improvedEssayOutput').innerHTML = data.improvedEssay;
                }
                if (data.citations && !data.citations.includes('placeholder')) {
                    document.getElementById('citationOutput').innerHTML = data.citations;
                }
                if (data.grammarResults && !data.grammarResults.includes('placeholder')) {
                    document.getElementById('grammarOutput').innerHTML = data.grammarResults;
                }
            } catch (error) {
                console.error('Error loading saved data:', error);
            }
        }
    }

    exportEssay() {
        const essay = document.getElementById('essayOutput').textContent || document.getElementById('essayOutput').innerText || '';
        
        if (!essay.trim()) {
            this.showError('No essay to export');
            return;
        }

        const blob = new Blob([essay], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `essay_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showSuccess('Essay exported successfully!');
    }

    loadSettings() {
        const saved = localStorage.getItem('essayAI_settings');
        return saved ? JSON.parse(saved) : {
            apiKey: '',
            model: 'gpt-4'
        };
    }

    saveSettings() {
        const apiKey = document.getElementById('apiKey').value;
        const model = document.getElementById('model').value;
        
        this.settings = { apiKey, model };
        localStorage.setItem('essayAI_settings', JSON.stringify(this.settings));
        
        this.closeSettingsModal();
        this.showSuccess('Settings saved successfully!');
    }

    closeSettingsModal() {
        document.getElementById('settingsModal').classList.remove('active');
    }

    setupAutoSave() {
        let timeout;
        const autoSaveElements = [
            'essayOutput',
            'improvedEssayOutput',
            'citationOutput',
            'grammarOutput'
        ];

        autoSaveElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        this.saveData();
                    }, 3000); // Auto-save after 3 seconds of inactivity
                });
            }
        });
    }

    showLoading(message = 'Processing...') {
        const overlay = document.getElementById('loadingOverlay');
        const messageEl = overlay.querySelector('p');
        messageEl.textContent = message;
        overlay.classList.add('active');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.remove('active');
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1001;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#28a745' : '#dc3545'};
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.essayAI = new EssayAI();
}); 