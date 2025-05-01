import { useEffect, useRef } from 'react';

const AlumniNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Set up nodes
    const nodeCount = 8; // Number of nodes in our path
    const nodes = [];
    
    // Create nodes in a diagonal pattern
    for (let i = 0; i < nodeCount; i++) {
      const isEven = i % 2 === 0;
      nodes.push({
        x: width * 0.2 + (width * 0.6 * i) / nodeCount,
        y: height * 0.25 + (height * 0.5 * i) / nodeCount,
        radius: isEven ? 15 : 12, // Orange nodes slightly larger
        color: isEven ? '#F97316' : '#60A5FA', // Orange and blue colors
        ringRadius: isEven ? 40 : 30, // Outer ring radius
        ringColor: isEven ? 'rgba(249, 115, 22, 0.3)' : 'rgba(96, 165, 250, 0.3)',
        pulseFactor: 0,
        pulseDirection: 1,
        pulseSpeed: 0.01 + (Math.random() * 0.01)
      });
    }
    
    // Animation function
    function animate() {
      // Clear the canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections first (so they appear behind the nodes)
      ctx.beginPath();
      for (let i = 0; i < nodes.length - 1; i++) {
        const currentNode = nodes[i];
        const nextNode = nodes[i + 1];
        
        ctx.moveTo(currentNode.x, currentNode.y);
        ctx.lineTo(nextNode.x, nextNode.y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw and update nodes
      nodes.forEach((node) => {
        // Update pulse animation
        node.pulseFactor += node.pulseSpeed * node.pulseDirection;
        if (node.pulseFactor > 1) {
          node.pulseDirection = -1;
        } else if (node.pulseFactor < 0) {
          node.pulseDirection = 1;
        }
        
        // Draw outer ring with pulse effect
        const pulseRadius = node.ringRadius * (0.8 + (node.pulseFactor * 0.2));
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.ringColor;
        ctx.fill();
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });
      
      // Continue animation
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Clean up
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Animation Canvas */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden aspect-[5/4]">
              <canvas 
                ref={canvasRef} 
                width={600} 
                height={480} 
                className="w-full h-full"
              ></canvas>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-4xl font-bold mb-6 text-amber-500">
              Alumni Network and job listings
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              The alumni Network that you always wished for in your college. We have a dedicated platform where students get to 
              know each other, do projects, make agencies and join Hackathons.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Our HR team also post regular job updates that you can apply directly whenever you are ready
            </p>
            <div className="text-amber-500 font-mono text-sm">
              /* connect.alumni.network() */
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniNetwork;