import { WAMessageContent } from '../Types/index.js';
import { normalizeMessageContent } from '../Utils/index.js';
describe('Messages Tests', () => {
    it('should correctly unwrap messages', () => {
        const CONTENT = { imageMessage: {} };
        expectRightContent(CONTENT);
        expectRightContent({
            ephemeralMessage: { message: CONTENT }
        });
        expectRightContent({
            viewOnceMessage: {
                message: {
                    ephemeralMessage: { message: CONTENT }
                }
            }
        });
        expectRightContent({
            viewOnceMessage: {
                message: {
                    viewOnceMessageV2: {
                        message: {
                            ephemeralMessage: { message: CONTENT }
                        }
                    }
                }
            }
        });
        function expectRightContent(content) {
            expect(normalizeMessageContent(content)).toHaveProperty('imageMessage');
        }
    });
});
//# sourceMappingURL=test.messages.js.map