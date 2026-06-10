import React, { useState } from 'react';

function PalmBtn({ children, onClick }) {
	return (
		<div class="pixel-corners--wrapper">
			<button
				className="palm-btn"
				onClick={onClick}
				style={{
					display: 'block',
					background: 'white',
					fontWeight: 'bold',
					fontSize: '14px',
					padding: '0px 8px',
					cursor: 'pointer',
					color: '#000',
					fontFamily: 'inherit',
					WebkitFontSmoothing: 'none',
					outline: 'none',
				}}
			>
				{children}
			</button>
		</div>
	);
}

function TitleBadge({ children }) {
	return (
		<div
			style={{
				position: 'relative',
				background: '#21008C',
				color: '#fff',
				fontWeight: 'bold',
				fontSize: '14px',
				lineHeight: 1.2,
				padding: '2px 8px',
				border: 'none',
				marginRight: '4px',
				marginLeft: '4px',
				clipPath: `polygon(
                  0px 100%,
                  100% 100%,
                  100% 4px,
                  calc(100% - 2px) 4px,
                  calc(100% - 2px) 2px,
                  calc(100% - 4px) 2px,
                  calc(100% - 4px) 0px,
                  4px 0px,
                  4px 2px,
                  2px 2px,
                  2px 4px,
                  0px 4px
                )`,
			}}
		>
			{children}
		</div>
	);
}

const CATEGORIES = ['Business', 'Personal', 'Unfiled'];
const FILTER_CATEGORIES = ['All', ...CATEGORIES];

export default function MemosOS5() {
	const [memos, setMemos] = useState([
		{
			id: 1,
			text: 'This is an interactive demo of Memo Pad',
			category: 'Personal',
		},
		{
			id: 2,
			text: 'Click around and explore!',
			category: 'Unfiled',
		},
		{
			id: 3,
			text: 'Credits for tools used in this demo:\n\nRounded pixel corner generator by Luke Bonaccorsi https://pixelcorners.lukeb.co.uk/\n\nPalm OS font by Damien Guard https://fontstruct.com/fontstructors/38093/damieng\n\nCloudPilot https://cloudpilot-emu.github.io/',
			category: 'Business',
		},
	]);
	const [view, setView] = useState('list');
	const [currentMemoId, setCurrentMemoId] = useState(null);
	const [selectedFilter, setSelectedFilter] = useState('All');
	const [showHomeDropdown, setShowHomeDropdown] = useState(false);
	const [showEditorDropdown, setShowEditorDropdown] = useState(false);

	const filteredMemos = memos.filter(m => selectedFilter === 'All' || m.category === selectedFilter);

	const handleNew = () => {
		const newMemo = {
			id: Date.now(),
			text: '',
			category: selectedFilter === 'All' ? 'Unfiled' : selectedFilter,
		};
		setMemos([...memos, newMemo]);
		setCurrentMemoId(newMemo.id);
		setView('editor');
	};

	const handleDone = () => {
		setMemos(prev => prev.filter(m => m.text.trim() !== ''));
		setView('list');
		setCurrentMemoId(null);
	};

	const updateCurrentMemo = updates => {
		setMemos(prev => prev.map(m => (m.id === currentMemoId ? { ...m, ...updates } : m)));
	};

	const currentMemoIndex = filteredMemos.findIndex(m => m.id === currentMemoId);
	const currentMemo = filteredMemos[currentMemoIndex] || { text: '', category: 'Unfiled' };

	const handlePrev = () => {
		if (currentMemoIndex > 0) setCurrentMemoId(filteredMemos[currentMemoIndex - 1].id);
	};
	const handleNext = () => {
		if (currentMemoIndex < filteredMemos.length - 1) setCurrentMemoId(filteredMemos[currentMemoIndex + 1].id);
	};

	const DOT_SVG = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='18'%3E%3Crect x='0' y='15' width='2' height='2' fill='%23aaa'/%3E%3C/svg%3E\")";
	const ruledLinesStyle = {
		lineHeight: '18px',
		padding: '0 2px',
		backgroundImage: DOT_SVG,
		backgroundSize: '4px 18px',
		backgroundPosition: '0 0',
		backgroundAttachment: 'local',
		backgroundRepeat: 'repeat',
	};

	const dropdownItemBase = {
		padding: '3px 8px',
		fontSize: '14px',
		fontWeight: 'bold',
		cursor: 'pointer',
		borderRadius: 0,
		display: 'block',
	};

	const PixelDropdown = ({ items, selectedValue, onSelect }) => (
		<div
			style={{
				position: 'absolute',
				top: 'calc(100% + 4px)',
				right: 0,
				zIndex: 20,
				background: '#fff',
				border: '2px solid #000',
				boxShadow: '2px 2px 0px rgba(0,0,0,1)',
				minWidth: '144px',
			}}
		>
			{items.map(({ label, value, disabled }) => (
				<div
					key={label}
					className="palm-drop-item"
					style={{
						...dropdownItemBase,
						background: selectedValue === value ? '#21008C' : '#fff',
						color: selectedValue === value ? '#fff' : '#000',
						opacity: disabled ? 0.5 : 1,
					}}
					onClick={() => !disabled && onSelect(value)}
				>
					{label}
				</div>
			))}
		</div>
	);

	return (
		<div
			className="font-palm"
			style={{
				width: '320px',
				height: '320px',
				background: '#fff',
				color: '#000',
				position: 'relative',
				border: '1px solid #aaa',
				overflow: 'hidden',
				userSelect: 'none',
				display: 'flex',
				flexDirection: 'column',
				boxShadow: '0 0 10px rgba(0,0,0,0.1)',
				fontFamily: 'PalmOS, sans-serif',
				WebkitFontSmoothing: 'none',
			}}
		>
			<style>{`
        @font-face {
          font-family: 'PalmOS';
          src: url('/fonts/palm-os.otf.woff2.otf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'PalmOS';
          src: url('/fonts/palm-os-bold.otf.woff2.otf') format('opentype');
          font-weight: bold;
          font-style: normal;
        }
        .font-palm,
        .font-palm * {
          font-family: 'PalmOS', sans-serif;
          -webkit-font-smoothing: none;
        }
        .palm-scrollbar::-webkit-scrollbar { width: 8px; }
        .palm-scrollbar::-webkit-scrollbar-track { background: #fff; border-left: 1px solid #000; }
        .palm-scrollbar::-webkit-scrollbar-thumb { background: #ccc; border: 1px solid #000; }
        .palm-memo-item:hover { background: #21008C; color: #fff; }
        .palm-drop-item:hover { background: #21008C; color: #fff; }
        .palm-btn:active { background: #ddd; }
        .pixel-corners,
        .pixel-corners--wrapper {
          clip-path: polygon(0px calc(100% - 4px),
            2px calc(100% - 4px),
            2px calc(100% - 2px),
            4px calc(100% - 2px),
            4px 100%,
            calc(100% - 4px) 100%,
            calc(100% - 4px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 4px),
            100% calc(100% - 4px),
            100% 4px,
            calc(100% - 2px) 4px,
            calc(100% - 2px) 2px,
            calc(100% - 4px) 2px,
            calc(100% - 4px) 0px,
            4px 0px,
            4px 2px,
            2px 2px,
            2px 4px,
            0px 4px);
          position: relative;
        }
        .pixel-corners {
          border: 2px solid transparent;
        }
        .pixel-corners--wrapper {
          width: fit-content;
          height: fit-content;
        }
        .pixel-corners--wrapper .pixel-corners {
          display: block;
          clip-path: polygon(2px 4px,
            4px 4px,
            4px 2px,
            calc(100% - 4px) 2px,
            calc(100% - 4px) 4px,
            calc(100% - 2px) 4px,
            calc(100% - 2px) calc(100% - 4px),
            calc(100% - 4px) calc(100% - 4px),
            calc(100% - 4px) calc(100% - 2px),
            4px calc(100% - 2px),
            4px calc(100% - 4px),
            2px calc(100% - 4px));
        }
        .pixel-corners::after,
        .pixel-corners--wrapper::after {
          content: "";
          position: absolute;
          clip-path: polygon(0px calc(100% - 4px),
            2px calc(100% - 4px),
            2px calc(100% - 2px),
            4px calc(100% - 2px),
            4px 100%,
            calc(100% - 4px) 100%,
            calc(100% - 4px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 2px),
            calc(100% - 2px) calc(100% - 4px),
            100% calc(100% - 4px),
            100% 4px,
            calc(100% - 2px) 4px,
            calc(100% - 2px) 2px,
            calc(100% - 4px) 2px,
            calc(100% - 4px) 0px,
            4px 0px,
            4px 2px,
            2px 2px,
            2px 4px,
            0px 4px,
            0px 50%,
            2px 50%,
            2px 4px,
            4px 4px,
            4px 2px,
            calc(100% - 4px) 2px,
            calc(100% - 4px) 4px,
            calc(100% - 2px) 4px,
            calc(100% - 2px) calc(100% - 4px),
            calc(100% - 4px) calc(100% - 4px),
            calc(100% - 4px) calc(100% - 2px),
            4px calc(100% - 2px),
            4px calc(100% - 4px),
            2px calc(100% - 4px),
            2px 50%,
            0px 50%);
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: #000000;
          display: block;
          pointer-events: none;
        }
        .pixel-corners::after {
          margin: -2px;
        }
      `}</style>

			{/* ── LIST VIEW ── */}
			{view === 'list' && (
				<div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
					{/* Header */}
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							borderBottom: '2px solid #21008C',
							paddingRight: '4px',
							paddingTop: '2px',
							height: '26px',
						}}
					>
						<TitleBadge>Memos</TitleBadge>
						<div style={{ position: 'relative' }}>
							<div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingBottom: '2px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }} onClick={() => setShowHomeDropdown(v => !v)}>
								<svg width="8" height="6" viewBox="0 0 8 6">
									<path d="M0,0 L8,0 L4,5 Z" fill="black" />
								</svg>
								<span>{selectedFilter}</span>
							</div>
							{showHomeDropdown && (
								<PixelDropdown
									items={[...FILTER_CATEGORIES].map(cat => ({
										label: cat,
										value: cat,
									}))}
									selectedValue={selectedFilter}
									onSelect={val => {
										setSelectedFilter(val);
										setShowHomeDropdown(false);
									}}
								/>
							)}
						</div>
					</div>

					{/* Memo list */}
					<div className="palm-scrollbar" style={{ flex: 1, overflowY: 'auto', paddingTop: '4px', paddingBottom: '32px' }}>
						{filteredMemos.map((memo, index) => {
							const lines = memo.text.split(/\r?\n/).filter(l => l.trim() !== '');
							const title = lines[0] || '(No Content)';
							return (
								<div
									key={memo.id}
									className="palm-memo-item"
									style={{ display: 'flex', padding: '0 4px', cursor: 'pointer', fontSize: '14px', lineHeight: '18px' }}
									onClick={() => {
										setCurrentMemoId(memo.id);
										setView('editor');
									}}
								>
									<span style={{ fontWeight: 'bold', whiteSpace: 'pre', marginRight: '2px' }}>{index + 1}. </span>
									<span style={{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</span>
								</div>
							);
						})}
					</div>

					{/* Bottom bar */}
					<div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', padding: '3px 4px' }}>
						<PalmBtn onClick={handleNew}>New</PalmBtn>
					</div>
				</div>
			)}

			{/* ── EDITOR VIEW ── */}
			{view === 'editor' && (
				<div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
					{/* Header */}
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							borderBottom: '2px solid #21008C',
							paddingRight: '4px',
							paddingTop: '2px',
							height: '26px',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'flex-end' }}>
							<TitleBadge>Memo</TitleBadge>
							<div style={{ display: 'flex', alignItems: 'center', gap: '3px', paddingBottom: '0px', marginLeft: '6px', fontWeight: 'bold', fontSize: '14px' }}>
								<svg width="10" height="17" viewBox="0 0 7 10" style={{ cursor: 'pointer' }} onClick={handlePrev}>
									<polygon points="7,0 0,5 7,10" fill="black" />
								</svg>
								<span>
									{currentMemoIndex + 1} of {filteredMemos.length}
								</span>
								<svg width="10" height="17" viewBox="0 0 7 10" style={{ cursor: 'pointer' }} onClick={handleNext}>
									<polygon points="0,0 7,5 0,10" fill="black" />
								</svg>
							</div>
						</div>

						{/* Category badge — dashed border */}
						<div style={{ position: 'relative', paddingBottom: '2px' }}>
							<div
								style={{
									border: '1.5px dashed #000',
									borderRadius: 0,
									padding: '1px 4px',
									fontWeight: 'bold',
									fontSize: '13px',
									lineHeight: 1.2,
									cursor: 'pointer',
								}}
								onClick={() => setShowEditorDropdown(v => !v)}
							>
								{currentMemo.category}
							</div>
							{showEditorDropdown && (
								<PixelDropdown
									items={[...CATEGORIES].map(cat => ({
										label: cat,
										value: cat,
									}))}
									selectedValue={currentMemo.category}
									onSelect={val => {
										updateCurrentMemo({ category: val });
										setShowEditorDropdown(false);
									}}
								/>
							)}
						</div>
					</div>

					{/* Ruled textarea */}
					<div style={{ flex: 1, position: 'relative', overflow: 'hidden', marginBottom: '28px' }}>
						<textarea
							className="palm-scrollbar font-palm"
							style={{
								...ruledLinesStyle,
								width: '100%',
								height: '100%',
								backgroundColor: 'transparent',
								resize: 'none',
								outline: 'none',
								border: 'none',
								fontSize: '14px',
								fontWeight: 'bold',
								fontFamily: 'inherit',
								WebkitFontSmoothing: 'none',
								position: 'relative',
								zIndex: 10,
								boxSizing: 'border-box',
							}}
							value={currentMemo.text}
							onChange={e => updateCurrentMemo({ text: e.target.value })}
							autoFocus
						/>
					</div>

					{/* Bottom bar */}
					<div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', padding: '3px 4px', display: 'flex', gap: '8px' }}>
						<PalmBtn onClick={handleDone}>Done</PalmBtn>
					</div>
				</div>
			)}
		</div>
	);
}
